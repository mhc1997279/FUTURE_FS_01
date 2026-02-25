import nodemailer from "nodemailer";

/**
 * Basic sanitization: trims, removes angle brackets to reduce HTML injection,
 * and normalizes whitespace.
 */
function sanitize(input = "") {
  return String(input)
    .trim()
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ");
}

function isValidEmail(email = "") {
  // Practical email validation (not perfect RFC, but solid for contact forms)
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { GMAIL_USER, GMAIL_APP_PASSWORD, TO_EMAIL } = process.env;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      // Server misconfiguration
      return res.status(500).json({
        ok: false,
        error: "Server is not configured for email sending.",
      });
    }

    // Vercel auto-parses JSON when Content-Type: application/json
    const rawName = req.body?.name;
    const rawEmail = req.body?.email;
    const rawMessage = req.body?.message;

    const name = sanitize(rawName);
    const email = sanitize(rawEmail).toLowerCase();
    const message = sanitize(rawMessage);

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: "Missing required fields (name, email, message).",
      });
    }

    if (name.length < 2 || name.length > 80) {
      return res.status(400).json({ ok: false, error: "Invalid name length." });
    }

    if (!isValidEmail(email) || email.length > 254) {
      return res.status(400).json({ ok: false, error: "Invalid email address." });
    }

    if (message.length < 10 || message.length > 3000) {
      return res.status(400).json({
        ok: false,
        error: "Message must be between 10 and 3000 characters.",
      });
    }

    // Create transporter (Gmail via App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    const toAddress = TO_EMAIL || GMAIL_USER;

    const subject = `Portfolio contact from ${name}`;
    const text = [
      `You received a new message from your portfolio contact form.`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      ``,
      `Message:`,
      message,
      ``,
      `----`,
      `Sent from: ${
        req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown IP"
      }`,
      `User-Agent: ${req.headers["user-agent"] || "unknown"}`,
    ].join("\n");

    // Send mail
    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: toAddress,
      subject,
      text,
      replyTo: email, // so you can hit "Reply" and respond to the sender
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    // Log server-side for Vercel logs
    console.error("CONTACT_API_ERROR:", err);

    return res.status(500).json({
      ok: false,
      error: "Failed to send message. Please try again later.",
    });
  }
}import nodemailer from "nodemailer";

/**
 * Vercel Serverless Function — POST /api/contact
 * Env vars required: GMAIL_USER, GMAIL_APP_PASSWORD, TO_EMAIL (optional)
 */
export default async function handler(req, res) {
  // ── Method guard ──────────────────────────────────────────────────────────
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  // ── Parse & validate body ─────────────────────────────────────────────────
  const { name, email, subject, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Name, email, and message are required." });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return res
      .status(400)
      .json({ ok: false, error: "Please provide a valid email address." });
  }

  // ── Env-var guard ─────────────────────────────────────────────────────────
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars.");
    return res
      .status(500)
      .json({ ok: false, error: "Server email configuration is missing." });
  }

  // ── Send email ────────────────────────────────────────────────────────────
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const to = process.env.TO_EMAIL || process.env.GMAIL_USER;
    const subjectLine = subject
      ? `[Portfolio] ${subject}`
      : `[Portfolio] New message from ${name}`;

    // Escape helper to prevent XSS in the HTML email body
    const esc = (str) =>
      String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to,
      replyTo: email,
      subject: subjectLine,
      text: `Name: ${name}\nEmail: ${email}${subject ? `\nSubject: ${subject}` : ""}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
          <h2 style="color:#14b8a6;border-bottom:2px solid #14b8a6;padding-bottom:8px;">
            New Contact Form Submission
          </h2>
          <table style="width:100%;border-collapse:collapse;margin-top:12px;">
            <tr>
              <td style="padding:8px 12px;font-weight:700;color:#555;width:90px;">Name</td>
              <td style="padding:8px 12px;">${esc(name)}</td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding:8px 12px;font-weight:700;color:#555;">Email</td>
              <td style="padding:8px 12px;">
                <a href="mailto:${esc(email)}" style="color:#14b8a6;">${esc(email)}</a>
              </td>
            </tr>
            ${
              subject
                ? `<tr>
              <td style="padding:8px 12px;font-weight:700;color:#555;">Subject</td>
              <td style="padding:8px 12px;">${esc(subject)}</td>
            </tr>`
                : ""
            }
          </table>
          <h3 style="color:#555;margin-top:20px;">Message</h3>
          <p style="background:#f5f5f5;padding:16px;border-radius:8px;white-space:pre-wrap;line-height:1.6;">
            ${esc(message)}
          </p>
          <p style="color:#999;font-size:12px;margin-top:24px;">
            Hit <em>Reply</em> to respond directly to ${esc(name)}.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] sendMail error:", err);
    return res
      .status(500)
      .json({ ok: false, error: "Failed to send email. Please try again later." });
  }
}
