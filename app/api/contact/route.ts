import { Resend } from "resend";
import { NextResponse } from "next/server";
import { insertLead, updateLeadEmailStatus } from "@/lib/db";

const resend = new Resend(process.env.RESEND_API_KEY);

// Dark-background wordmark hosted on Vercel Blob (renders in all email clients)
const LOGO_URL =
  "https://yd7xw8j43d5hdlrd.public.blob.vercel-storage.com/truax-logo-dark-MwQyIuQ6NQEd4ppEEgHH0yWCH7x8et.png";

// Escape user-provided values before placing them in email HTML
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Dark header with logo, shared across templates
function emailHeader() {
  return `
    <tr>
      <td style="background-color:#0a0a12;padding:32px 40px;text-align:center;border-radius:12px 12px 0 0;">
        <img src="${LOGO_URL}" alt="Truax Marketing" width="180" style="display:block;margin:0 auto;width:180px;max-width:70%;height:auto;border:0;" />
      </td>
    </tr>`;
}

function emailFooter() {
  return `
    <tr>
      <td style="background-color:#0a0a12;padding:24px 40px;border-radius:0 0 12px 12px;">
        <p style="margin:0;color:#8b8b9a;font-size:12px;line-height:1.6;text-align:center;font-family:Arial,Helvetica,sans-serif;">
          Truax Marketing Solutions &nbsp;&middot;&nbsp; Portland, Oregon<br />
          Sent from the website contact form
        </p>
      </td>
    </tr>`;
}

// Beautiful lead notification email (table layout + inline styles for email clients)
function buildLeadEmail(input: {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}) {
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const company = input.company ? escapeHtml(input.company) : "";
  const service = input.service ? escapeHtml(input.service) : "";
  const message = escapeHtml(input.message).replace(/\n/g, "<br />");

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #ececf2;font-family:Arial,Helvetica,sans-serif;">
        <span style="display:block;color:#8b8b9a;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:4px;">${label}</span>
        <span style="display:block;color:#1a1a24;font-size:15px;font-weight:600;">${value}</span>
      </td>
    </tr>`;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="color-scheme" content="light only" />
    <title>New inquiry from ${name}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f2f2f7;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2f2f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;box-shadow:0 4px 24px rgba(15,15,30,0.08);">
            ${emailHeader()}
            <tr>
              <td style="padding:36px 40px 8px;">
                <span style="display:inline-block;background-color:#27AAE1;color:#0a0a12;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:6px 12px;border-radius:999px;font-family:Arial,Helvetica,sans-serif;">New Lead</span>
                <h1 style="margin:16px 0 4px;color:#1a1a24;font-size:22px;font-family:Arial,Helvetica,sans-serif;">${name} sent you a message</h1>
                <p style="margin:0;color:#6b6b7b;font-size:14px;font-family:Arial,Helvetica,sans-serif;">${service ? service + " inquiry" : "Website inquiry"}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 40px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", name)}
                  ${row("Email", `<a href="mailto:${email}" style="color:#2B3990;text-decoration:none;">${email}</a>`)}
                  ${company ? row("Company", company) : ""}
                  ${service ? row("Service Interest", service) : ""}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 40px 8px;">
                <span style="display:block;color:#8b8b9a;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px;font-family:Arial,Helvetica,sans-serif;">Message</span>
                <div style="background-color:#f7f7fb;border-left:3px solid #27AAE1;border-radius:8px;padding:16px 18px;color:#2a2a38;font-size:15px;line-height:1.6;font-family:Arial,Helvetica,sans-serif;">${message}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px 36px;">
                <a href="mailto:${email}?subject=Re:%20Your%20inquiry%20with%20Truax%20Marketing" style="display:inline-block;background-color:#27AAE1;color:#0a0a12;font-size:14px;font-weight:700;text-decoration:none;padding:12px 24px;border-radius:8px;font-family:Arial,Helvetica,sans-serif;">Reply to ${name}</a>
              </td>
            </tr>
            ${emailFooter()}
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;
}

// Warm confirmation email sent to the person who submitted the form
function buildConfirmationEmail(input: { name: string; service?: string }) {
  const name = escapeHtml(input.name);
  const service = input.service ? escapeHtml(input.service) : "";

  const step = (num: string, title: string, body: string) => `
    <tr>
      <td style="padding:0 0 18px;font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td width="36" valign="top">
              <div style="width:28px;height:28px;background-color:#27AAE1;color:#0a0a12;border-radius:999px;text-align:center;line-height:28px;font-size:13px;font-weight:700;">${num}</div>
            </td>
            <td valign="top" style="padding-left:12px;">
              <span style="display:block;color:#1a1a24;font-size:15px;font-weight:700;margin-bottom:2px;">${title}</span>
              <span style="display:block;color:#6b6b7b;font-size:14px;line-height:1.5;">${body}</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="color-scheme" content="light only" />
    <title>Thanks for reaching out to Truax Marketing</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f2f2f7;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2f2f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;box-shadow:0 4px 24px rgba(15,15,30,0.08);">
            ${emailHeader()}
            <tr>
              <td style="padding:40px 40px 8px;font-family:Arial,Helvetica,sans-serif;">
                <span style="display:inline-block;background-color:#eef7fc;color:#2B3990;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:6px 12px;border-radius:999px;">Message Received</span>
                <h1 style="margin:16px 0 8px;color:#1a1a24;font-size:24px;">Thanks, ${name}. We&#39;ve got it.</h1>
                <p style="margin:0;color:#4a4a58;font-size:15px;line-height:1.6;">
                  Your message landed in our inbox and a real person will read it. ${service ? `We saw you&#39;re interested in <strong style="color:#1a1a24;">${service}</strong>, and we&#39;ll` : "We&#39;ll"} reach out within one business day.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px 8px;">
                <span style="display:block;color:#8b8b9a;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:16px;font-family:Arial,Helvetica,sans-serif;">What happens next</span>
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                  ${step("1", "We review your note", "We read every message and match you with the right person on our team.")}
                  ${step("2", "We reach out", "Expect a reply within one business day to set up a time to talk.")}
                  ${step("3", "We map a plan", "A short discovery call to understand your goals and where we can help.")}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 40px 8px;font-family:Arial,Helvetica,sans-serif;">
                <div style="height:1px;background-color:#ececf2;margin:8px 0 20px;"></div>
                <p style="margin:0 0 12px;color:#4a4a58;font-size:15px;line-height:1.6;">While you wait, take a look around:</p>
                <p style="margin:0 0 10px;">
                  <a href="https://truaxmarketing.com/services" style="color:#2B3990;font-size:15px;text-decoration:none;font-weight:600;">Explore our services &rarr;</a>
                </p>
                <p style="margin:0 0 4px;">
                  <a href="https://truaxmarketing.com/blog" style="color:#2B3990;font-size:15px;text-decoration:none;font-weight:600;">Read our latest insights &rarr;</a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 40px 36px;font-family:Arial,Helvetica,sans-serif;">
                <p style="margin:0;color:#4a4a58;font-size:15px;line-height:1.6;">Talk soon,<br /><strong style="color:#1a1a24;">The Truax Marketing Team</strong></p>
              </td>
            </tr>
            ${emailFooter()}
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message, source } = body;

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

    // 1. Save the lead to the database FIRST. This is the durable record of truth,
    // so a bounced or blocked email can never lose a lead again.
    let leadId: number | null = null;
    try {
      leadId = await insertLead({ name, email, company, service, message, source });
    } catch (dbError) {
      console.error("Contact form: failed to save lead to database", dbError);
    }

    // 2. Send the notification email to Truax Marketing.
    let emailSent = false;
    try {
      const { error: notifyError } = await resend.emails.send({
        from: "Truax Marketing Website <leads@truax.marketing>",
        to: ["aaron@truaxmarketing.com"],
        replyTo: email,
        subject: `[${service}] New inquiry from ${name}${company ? ` at ${company}` : ""}`,
        html: buildLeadEmail({ name, email, company, service, message }),
      });
      if (notifyError) {
        console.error("Contact form: lead notification failed", notifyError);
      } else {
        emailSent = true;
      }
    } catch (sendError) {
      console.error("Contact form: lead notification threw", sendError);
    }

    // Record the delivery outcome against the saved lead.
    if (leadId !== null) {
      try {
        await updateLeadEmailStatus(leadId, emailSent ? "sent" : "failed");
      } catch (statusError) {
        console.error("Contact form: failed to update email status", statusError);
      }
    }

    // Only fail the request if BOTH capture paths failed (no DB row and no email).
    if (leadId === null && !emailSent) {
      return NextResponse.json(
        { error: "Failed to submit your message. Please try again or email us directly." },
        { status: 500 }
      );
    }

    // Send confirmation email to the user (best-effort; must not block the lead)
    try {
      await resend.emails.send({
        from: "Truax Marketing <leads@truax.marketing>",
        to: [email],
        subject: "Thanks for reaching out to Truax Marketing",
        html: buildConfirmationEmail({ name, service }),
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
