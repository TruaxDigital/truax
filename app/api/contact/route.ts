import { Resend } from "resend";
import { NextResponse } from "next/server";

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
      html: buildLeadEmail({ name, email, company, service, message }),
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
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="color-scheme" content="light only" />
          <title>Thanks for reaching out</title>
        </head>
        <body style="margin:0;padding:0;background-color:#f2f2f7;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2f2f7;padding:32px 16px;">
            <tr>
              <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;box-shadow:0 4px 24px rgba(15,15,30,0.08);">
                  ${emailHeader()}
                  <tr>
                    <td style="padding:36px 40px 24px;font-family:Arial,Helvetica,sans-serif;">
                      <h1 style="margin:0 0 12px;color:#1a1a24;font-size:22px;">Thanks for reaching out, ${escapeHtml(name)}</h1>
                      <p style="margin:0 0 16px;color:#4a4a58;font-size:15px;line-height:1.6;">We got your message and will get back to you within 24 hours.</p>
                      <p style="margin:0 0 12px;color:#4a4a58;font-size:15px;line-height:1.6;">In the meantime:</p>
                      <p style="margin:0 0 10px;">
                        <a href="https://truaxmarketing.com/blog" style="color:#2B3990;font-size:15px;text-decoration:none;font-weight:600;">Read our latest insights &rarr;</a>
                      </p>
                      <p style="margin:0 0 24px;">
                        <a href="https://truaxmarketing.com/services" style="color:#2B3990;font-size:15px;text-decoration:none;font-weight:600;">Explore our services &rarr;</a>
                      </p>
                      <p style="margin:0;color:#4a4a58;font-size:15px;line-height:1.6;">Best,<br />The Truax Marketing Team</p>
                    </td>
                  </tr>
                  ${emailFooter()}
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
