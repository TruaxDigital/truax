// Spam screening for the website contact form.
//
// Layers (cheapest first):
// 1. Honeypot: a hidden "website" field humans never see or fill.
// 2. Timing: the form sends the time it was rendered. Humans need more than a
//    few seconds to type a name, email, and message. Scripts post instantly or
//    skip the field entirely.
// 3. Content: patterns that show up in bot traffic and almost never in real
//    leads, such as Gmail addresses padded with dots (m.e.h.uqeh8.57@gmail.com).
//
// Vercel BotID runs before this in the route handler and catches headless
// browsers and scripted traffic that never loaded the page.

export const MIN_FILL_MS = 3_000
// A rendered form older than this is stale (or the timestamp was forged).
export const MAX_FILL_MS = 1000 * 60 * 60 * 24

export type SpamInput = {
  name?: unknown
  email?: unknown
  company?: unknown
  message?: unknown
  website?: unknown // honeypot
  startedAt?: unknown // ms timestamp from the client when the form mounted
}

export type SpamVerdict = { spam: false } | { spam: true; reason: string }

const GMAIL_DOMAINS = new Set(["gmail.com", "googlemail.com"])
const URL_PATTERN = /(https?:\/\/|www\.)\S+/gi
const URL_TEST = /(https?:\/\/|www\.)\S+/i

function str(value: unknown): string {
  return typeof value === "string" ? value : ""
}

export function screenSubmission(input: SpamInput, now = Date.now()): SpamVerdict {
  // 1. Honeypot
  if (str(input.website).trim() !== "") {
    return { spam: true, reason: "honeypot" }
  }

  // 2. Timing
  const startedAt = Number(input.startedAt)
  if (!Number.isFinite(startedAt) || startedAt <= 0) {
    return { spam: true, reason: "missing-timestamp" }
  }
  const elapsed = now - startedAt
  if (elapsed < MIN_FILL_MS) {
    return { spam: true, reason: "too-fast" }
  }
  if (elapsed > MAX_FILL_MS) {
    return { spam: true, reason: "stale-timestamp" }
  }

  // 3. Content
  const email = str(input.email).trim().toLowerCase()
  const [local = "", domain = ""] = email.split("@")
  if (GMAIL_DOMAINS.has(domain)) {
    // Gmail ignores dots, so bots spray dotted variants of one inbox.
    // Real people rarely use more than two dots.
    const dots = (local.split("+")[0].match(/\./g) || []).length
    if (dots >= 3) {
      return { spam: true, reason: "gmail-dot-pattern" }
    }
  }

  const name = str(input.name)
  const company = str(input.company)
  const message = str(input.message)

  // Links in the name or company field are a classic spam signal.
  if (URL_TEST.test(name) || URL_TEST.test(company)) {
    return { spam: true, reason: "link-in-name" }
  }

  const linkCount = (message.match(URL_PATTERN) || []).length
  if (linkCount >= 3) {
    return { spam: true, reason: "too-many-links" }
  }

  return { spam: false }
}
