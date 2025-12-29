import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, service, message, type } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Squad Security Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New ${type || "Contact"} Form Submission`,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
        ${type ? `<p><strong>Type:</strong> ${type}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

}
