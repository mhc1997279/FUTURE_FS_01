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
}
