import { cookies } from "next/headers"
import { createHmac, timingSafeEqual } from "crypto"

const COOKIE_NAME = "truax_admin"

// Derive a stable cookie token from the admin password. The raw password is
// never stored in the cookie; only its HMAC signature is.
function expectedToken(): string {
  const secret = process.env.ADMIN_PASSWORD
  if (!secret) throw new Error("ADMIN_PASSWORD is not set")
  return createHmac("sha256", secret).update("truax-admin-session").digest("hex")
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

// Verify a submitted password against ADMIN_PASSWORD (constant-time).
export function verifyPassword(password: string): boolean {
  const secret = process.env.ADMIN_PASSWORD
  if (!secret) return false
  return safeEqual(password, secret)
}

// Set the admin session cookie after a successful login.
export async function createAdminSession(): Promise<void> {
  const store = await cookies()
  store.set(COOKIE_NAME, expectedToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
}

// Clear the admin session cookie on logout.
export async function destroyAdminSession(): Promise<void> {
  const store = await cookies()
  store.delete(COOKIE_NAME)
}

// True when the current request carries a valid admin session cookie.
export async function isAdminAuthenticated(): Promise<boolean> {
  try {
    const store = await cookies()
    const token = store.get(COOKIE_NAME)?.value
    if (!token) return false
    return safeEqual(token, expectedToken())
  } catch {
    return false
  }
}
