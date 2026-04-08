import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const company = String(body?.company || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !toEmail) {
      return NextResponse.json(
        {
          error:
            "Contact form is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL in Vercel environment variables.",
        },
        { status: 500 },
      );
    }

    const subject = `New contact form submission from ${name}`;
    const content = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Kakano Biosciences <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email,
        subject,
        text: content,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return NextResponse.json(
        { error: "Unable to send message.", details: errorText },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Thanks — your message has been sent." });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request." },
      { status: 500 },
    );
  }
}
