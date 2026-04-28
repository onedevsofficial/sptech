import crypto from "crypto";

const SECRET =
  process.env.CAPTCHA_SECRET ||
  "change-me-in-production-please-set-CAPTCHA_SECRET-env-var";

const TTL_MS = 10 * 60 * 1000; // 10 minutes

type Op = "+" | "-" | "×";

function pickOp(): Op {
  const ops: Op[] = ["+", "-", "×"];
  return ops[Math.floor(Math.random() * ops.length)];
}

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compute(a: number, b: number, op: Op): number {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
  }
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
}

export function generateCaptcha() {
  const op = pickOp();
  let a: number;
  let b: number;
  if (op === "×") {
    a = randInt(2, 9);
    b = randInt(2, 9);
  } else {
    a = randInt(3, 19);
    b = randInt(2, Math.min(a, 12));
    if (op === "-" && b > a) [a, b] = [b, a];
  }
  const answer = compute(a, b, op);
  const issuedAt = Date.now();
  const nonce = crypto.randomBytes(8).toString("hex");
  const payload = `${answer}.${issuedAt}.${nonce}`;
  const sig = sign(payload);
  return {
    question: `${a} ${op} ${b}`,
    token: `${payload}.${sig}`,
  };
}

export function verifyCaptcha(token: string, userAnswer: string): boolean {
  if (!token || !userAnswer) return false;
  const parts = token.split(".");
  if (parts.length !== 4) return false;
  const [answerStr, issuedAtStr, nonce, providedSig] = parts;
  const payload = `${answerStr}.${issuedAtStr}.${nonce}`;
  const expectedSig = sign(payload);

  if (
    expectedSig.length !== providedSig.length ||
    !crypto.timingSafeEqual(Buffer.from(expectedSig), Buffer.from(providedSig))
  ) {
    return false;
  }

  const issuedAt = Number(issuedAtStr);
  if (!Number.isFinite(issuedAt)) return false;
  if (Date.now() - issuedAt > TTL_MS) return false;

  const expectedAnswer = Number(answerStr);
  const submitted = Number(userAnswer.trim());
  if (!Number.isFinite(submitted)) return false;

  return submitted === expectedAnswer;
}
