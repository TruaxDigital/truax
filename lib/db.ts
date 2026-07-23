import { Pool } from "pg"

// Single shared connection pool. Reused across hot reloads in dev via globalThis
// so we don't exhaust connections on every module reload.
const globalForPg = globalThis as unknown as { _leadsPool?: Pool }

export const pool =
  globalForPg._leadsPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 3,
  })

if (process.env.NODE_ENV !== "production") {
  globalForPg._leadsPool = pool
}

export type Lead = {
  id: number
  name: string
  email: string
  company: string | null
  service: string | null
  message: string
  source: string | null
  email_status: string
  created_at: string
}

// Insert a lead. Returns the new row id. Throws on failure so callers can log.
export async function insertLead(input: {
  name: string
  email: string
  company?: string | null
  service?: string | null
  message: string
  source?: string | null
  emailStatus?: string
}): Promise<number> {
  const result = await pool.query<{ id: number }>(
    `INSERT INTO leads (name, email, company, service, message, source, email_status)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id`,
    [
      input.name,
      input.email,
      input.company ?? null,
      input.service ?? null,
      input.message,
      input.source ?? null,
      input.emailStatus ?? "pending",
    ],
  )
  return result.rows[0].id
}

// Update the email delivery status for a lead after the send attempt.
export async function updateLeadEmailStatus(id: number, status: string): Promise<void> {
  await pool.query(`UPDATE leads SET email_status = $1 WHERE id = $2`, [status, id])
}

// Fetch all leads, newest first, for the admin view.
export async function getLeads(): Promise<Lead[]> {
  const result = await pool.query<Lead>(
    `SELECT id, name, email, company, service, message, source, email_status, created_at
     FROM leads
     ORDER BY created_at DESC`,
  )
  return result.rows
}
