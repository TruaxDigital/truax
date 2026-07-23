import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please fill out all required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email to Truax Marketing
    const { error: notifyError } = await resend.emails.send({
      from: "Truax Marketing Website <leads@truax.marketing>",
      to: ["aaron@truaxmarketing.com"],
      replyTo: email,
      subject: `[${service}] New inquiry from ${name}${company ? ` at ${company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2B3990;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #eee;" />
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ""}
          
          <h3 style="color: #27AAE1;">Message:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${message.replace(/\n/g, "<br>")}</p>
          
          <hr style="border: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">
            This message was sent from the Truax Marketing website contact form.
          </p>
        </div>
      `,
    });

    // If the lead notification itself failed, surface the error so the lead is not silently lost
    if (notifyError) {
      console.error("Contact form: lead notification failed", notifyError);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again or email us directly." },
        { status: 500 }
      );
    }

    // Send confirmation email to the user (best-effort; must not block the lead)
    try {
      await resend.emails.send({
        from: "Truax Marketing <leads@truax.marketing>",
        to: [email],
        subject: "Thanks for reaching out to Truax Marketing",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2B3990;">Thanks for reaching out, ${name}!</h2>
          
          <p>We received your message and will get back to you within 24 hours.</p>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li><a href="https://truaxmarketing.com/blog" style="color: #27AAE1;">Read our latest insights</a></li>
            <li><a href="https://truaxmarketing.com/services" style="color: #27AAE1;">Explore our services</a></li>
          </ul>
          
          <p>Best,<br>The Truax Marketing Team</p>
          
          <hr style="border: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">
            Truax Marketing Solutions<br>
            Portland, Oregon
          </p>
        </div>
      `,
      });
    } catch (confirmationError) {
      // Confirmation to the lead is non-critical; log but still count the lead as received
      console.error("Contact form: confirmation email failed", confirmationError);
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
