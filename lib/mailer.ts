import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service?: string;
  budget?: string;
  message?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmail(payload: ContactPayload) {
  const subjectTag = payload.service ? `[${payload.service}]` : "[New enquiry]";
  const subject = `${subjectTag} ${payload.name} — sptechweb.site`;

  const text = [
    `New enquiry from sptechweb.site`,
    `--------------------------------`,
    `Name:    ${payload.name}`,
    `Email:   ${payload.email}`,
    `Phone:   ${payload.phone}`,
    `Service: ${payload.service || "-"}`,
    `Budget:  ${payload.budget || "-"}`,
    ``,
    `Message:`,
    payload.message || "(none)",
    ``,
    `Received: ${new Date().toISOString()}`,
  ].join("\n");

  const html = `
    <div style="font-family:Inter,system-ui,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f7f8fc;color:#0a0e1f">
      <h2 style="margin:0 0 8px;font-family:'Plus Jakarta Sans',sans-serif">New enquiry — sptechweb.site</h2>
      <p style="color:#535b70;margin:0 0 16px">Received ${escapeHtml(new Date().toLocaleString("en-IN"))}</p>
      <table cellspacing="0" cellpadding="8" style="border-collapse:collapse;width:100%;background:white;border:1px solid #e4e7ee;border-radius:12px">
        <tr><td style="color:#535b70;width:120px">Name</td><td><b>${escapeHtml(payload.name)}</b></td></tr>
        <tr><td style="color:#535b70">Email</td><td><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
        <tr><td style="color:#535b70">Phone</td><td><a href="tel:${escapeHtml(payload.phone)}">${escapeHtml(payload.phone)}</a></td></tr>
        <tr><td style="color:#535b70">Service</td><td>${escapeHtml(payload.service || "-")}</td></tr>
        <tr><td style="color:#535b70">Budget</td><td>${escapeHtml(payload.budget || "-")}</td></tr>
      </table>
      <h3 style="margin:20px 0 8px">Message</h3>
      <div style="white-space:pre-wrap;background:white;border:1px solid #e4e7ee;border-radius:12px;padding:16px">${escapeHtml(payload.message || "(none)")}</div>
    </div>
  `;

  return { subject, text, html };
}

async function sendViaWeb3Forms(payload: ContactPayload) {
  const accessKey = process.env.WEB3FORMS_KEY!;
  const subjectTag = payload.service ? `[${payload.service}]` : "[New enquiry]";
  const subject = `${subjectTag} ${payload.name} — sptechweb.site`;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: "SPTech Website",
      replyto: payload.email,
      // Visible fields in the email body
      Name: payload.name,
      Email: payload.email,
      Phone: payload.phone,
      Service: payload.service || "-",
      Budget: payload.budget || "-",
      Message: payload.message || "(none)",
      // Web3Forms's own honeypot — keep blank
      botcheck: "",
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Web3Forms ${res.status}: ${body.slice(0, 300)}`);
  }
  return { delivered: true as const, via: "web3forms" as const };
}

async function sendViaResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY!;
  const to = (process.env.CONTACT_TO || "info@sptechweb.site")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = process.env.CONTACT_FROM || "SPTech Website <info@sptechweb.site>";
  const { subject, text, html } = buildEmail(payload);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text,
      html,
      reply_to: `${payload.name} <${payload.email}>`,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend ${res.status}: ${body.slice(0, 300)}`);
  }
  return { delivered: true as const, via: "resend" as const };
}

async function sendViaSmtp(payload: ContactPayload) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT || 587) === 465,
    auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
  });
  const to = process.env.CONTACT_TO || "info@sptechweb.site";
  const from = process.env.CONTACT_FROM || "SPTech Website <info@sptechweb.site>";
  const { subject, text, html } = buildEmail(payload);

  await transporter.sendMail({
    from,
    to,
    replyTo: `${payload.name} <${payload.email}>`,
    subject,
    text,
    html,
  });
  return { delivered: true as const, via: "smtp" as const };
}

export async function sendContactEmail(payload: ContactPayload) {
  // 1. Easiest path: Web3Forms — no DNS, just a single access key.
  if (process.env.WEB3FORMS_KEY) {
    return sendViaWeb3Forms(payload);
  }

  // 2. Cleaner path on Vercel once you've verified your domain: Resend.
  if (process.env.RESEND_API_KEY) {
    return sendViaResend(payload);
  }

  // 3. Fallback: SMTP via nodemailer.
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return sendViaSmtp(payload);
  }

  // No provider configured — log so devs can see submissions locally without crashing.
  console.info("[contact] No email provider configured. Form payload:", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });
  return { delivered: false as const, via: "log" as const, reason: "no-provider" };
}
