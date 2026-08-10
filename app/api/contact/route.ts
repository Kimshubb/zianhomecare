import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      service,
      message,
    } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Zian SafeHarbour Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New Care Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1f2937; max-width: 650px; margin: auto;">
          
          <div style="background:#0f4c5c; padding:28px; border-radius:12px 12px 0 0;">
            <h1 style="color:white; margin:0;">
              New Care Enquiry
            </h1>
            <p style="color:#d8f3dc; margin:8px 0 0;">
              Submitted through the Zian SafeHarbour Care website
            </p>
          </div>

          <div style="padding:30px; border:1px solid #e5e7eb; border-top:0; border-radius:0 0 12px 12px;">

            <h2 style="color:#0f4c5c;">
              Contact Details
            </h2>

            <p>
              <strong>Name:</strong><br />
              ${name}
            </p>

            <p>
              <strong>Phone:</strong><br />
              ${phone}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${email}
            </p>

            <p>
              <strong>Service:</strong><br />
              ${service || "Not specified"}
            </p>

            <hr style="border:0; border-top:1px solid #e5e7eb; margin:25px 0;" />

            <h2 style="color:#0f4c5c;">
              Care Enquiry
            </h2>

            <div style="background:#f8fafc; padding:20px; border-radius:10px; line-height:1.7;">
              ${message.replace(/\n/g, "<br />")}
            </div>

            <p style="margin-top:30px; font-size:13px; color:#6b7280;">
              This enquiry was submitted through
              ziansafeharbourcare.com.
            </p>

          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your message." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
