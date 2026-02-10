import { MongoClient } from "mongodb";
import { Resend } from "resend";

let cachedClient = null;

async function getClient() {
  if (cachedClient) return cachedClient;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Missing MONGODB_URI");

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    // Save to MongoDB
    const client = await getClient();
    const db = client.db("portfolio");
    const messages = db.collection("messages");

    const doc = {
      name: String(name).trim(),
      email: String(email).trim(),
      subject: String(subject || "").trim(),
      message: String(message).trim(),
      createdAt: new Date(),
      source: "portfolio-contact-form",
    };

    await messages.insertOne(doc);

    // Send email notification
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;

    if (!resendKey || !toEmail || !fromEmail) {
      // Saved to DB but email config not set
      return res.status(200).json({
        ok: true,
        saved: true,
        emailed: false,
        note: "Saved to DB, but missing RESEND_API_KEY / TO_EMAIL / FROM_EMAIL",
      });
    }

    const resend = new Resend(resendKey);

    const subjectLine = doc.subject
      ? `Portfolio: ${doc.subject} (from ${doc.name})`
      : `New portfolio message from ${doc.name}`;

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: subjectLine,
      text:
        `Name: ${doc.name}\n` +
        `Email: ${doc.email}\n` +
        (doc.subject ? `Subject: ${doc.subject}\n` : "") +
        `\nMessage:\n${doc.message}\n\n` +
        `Received: ${doc.createdAt.toISOString()}\n`,
    });

    return res.status(200).json({ ok: true, saved: true, emailed: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
