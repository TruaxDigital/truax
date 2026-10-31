import { redirect } from "next/navigation"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { getLeads } from "@/lib/db"
import { logout } from "@/app/admin/actions"
import { LeadsTable } from "@/components/admin/leads-table"
import { Button } from "@/components/ui/button"
import { Download, LogOut, Inbox, Mail, MailX, ShieldX } from "lucide-react"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Leads | Truax Marketing",
  robots: { index: false, follow: false },
}

export default async function LeadsPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin")
  }

  const allLeads = await getLeads()
  // Submissions the spam filter flagged are kept for review but hidden from the main list.
  const spam = allLeads.filter((l) => l.email_status?.startsWith("spam"))
  const leads = allLeads.filter((l) => !l.email_status?.startsWith("spam"))
  const sent = leads.filter((l) => l.email_status === "sent").length
  const failed = leads.filter((l) => l.email_status === "failed").length

  const stats = [
    { label: "Total leads", value: leads.length, icon: Inbox },
    { label: "Email delivered", value: sent, icon: Mail },
    { label: "Email failed", value: failed, icon: MailX },
    { label: "Blocked as spam", value: spam.length, icon: ShieldX },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">Leads</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Every contact form submission, saved the moment it arrives.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline">
              <a href="/admin/leads/export" download>
                <Download className="mr-2 size-4" />
                Export CSV
              </a>
            </Button>
            <form action={logout}>
              <Button type="submit" variant="ghost">
                <LogOut className="mr-2 size-4" />
                Sign out
              </Button>
            </form>
          </div>
        </header>

        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon className="size-4" />
                <span className="text-sm">{label}</span>
              </div>
              <p className="mono-stat mt-2 text-3xl font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </section>

        <LeadsTable leads={leads} />

        {spam.length > 0 && (
          <details className="mt-10">
            <summary className="cursor-pointer text-sm text-muted-foreground">
              Review {spam.length} submission{spam.length === 1 ? "" : "s"} flagged as spam
            </summary>
            <div className="mt-4">
              <LeadsTable leads={spam} />
            </div>
          </details>
        )}
      </div>
    </main>
  )
}
