import { NextResponse } from "next/server";
import { generateCaptcha } from "@/lib/captcha";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const c = generateCaptcha();
  return NextResponse.json(c, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    },
  });
}
