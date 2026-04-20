import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const subject = String(body?.subject || "").trim();
    const company = String(body?.company || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const recipient = toEmail ? toEmail : "";
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      subject ? `Subject: ${subject}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from: "Kākano Bio <onboarding@resend.dev>",
      to: recipient,
      subject: "New Contact Form Message",
      text,
    });

    return NextResponse.json({ message: "Thanks — your message has been sent." });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request." },
      { status: 500 },
    );
  }
}
