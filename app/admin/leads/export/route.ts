import { NextResponse } from "next/server"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { getLeads } from "@/lib/db"

// Escape a value for CSV: wrap in quotes and double any internal quotes.
function csvCell(value: unknown): string {
  const str = value == null ? "" : String(value)
  return `"${str.replace(/"/g, '""')}"`
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const leads = await getLeads()
  const header = ["ID", "Received", "Name", "Email", "Company", "Service", "Message", "Source", "Email Status"]

  const rows = leads.map((l) =>
    [l.id, l.created_at, l.name, l.email, l.company, l.service, l.message, l.source, l.email_status]
      .map(csvCell)
      .join(","),
  )

  const csv = [header.map(csvCell).join(","), ...rows].join("\r\n")
  const filename = `truax-leads-${new Date().toISOString().slice(0, 10)}.csv`

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  })
}
