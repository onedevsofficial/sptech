import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { verifyCaptcha } from "@/lib/captcha";
import { rateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("Please enter a valid email").max(120),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9+()\-\s]+$/, "Phone number contains invalid characters"),
  service: z.string().max(40).optional().default(""),
  budget: z.string().max(40).optional().default(""),
  message: z.string().max(1500).optional().default(""),
  website: z.string().max(0, "Spam detected").optional().default(""), // honeypot must be empty
  captchaAnswer: z.string().min(1).max(6),
  captchaToken: z.string().min(8).max(300),
  elapsedMs: z.number().int().nonnegative(),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept the consent box" }) }),
});

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const limit = rateLimit(`contact:${ip}`, 5, 60_000);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSec) },
      }
    );
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.errors[0];
    return NextResponse.json(
      { error: first?.message || "Invalid input." },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Time-trap: a real human takes longer than 1s between page-load and submit.
  if (data.elapsedMs < 1000) {
    return NextResponse.json(
      { error: "Submission too fast — please try again in a moment." },
      { status: 400 }
    );
  }

  // Honeypot
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ error: "Spam detected." }, { status: 400 });
  }

  // Math captcha
  if (!verifyCaptcha(data.captchaToken, data.captchaAnswer)) {
    return NextResponse.json(
      { error: "Captcha was incorrect or expired. Try the new question." },
      { status: 400 }
    );
  }

  // Validation passed — the browser will now POST the form to Web3Forms.
  // (Submitting from the server hits Cloudflare's JS challenge and times
  // out the Vercel function; the browser submission goes straight through.)
  return NextResponse.json({ ok: true });
}
