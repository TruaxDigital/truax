"use client"

import { useMemo, useState } from "react"
import type { Lead } from "@/lib/db"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search } from "lucide-react"

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })
}

function StatusBadge({ status }: { status: string }) {
  if (status === "sent") {
    return <Badge className="bg-primary/15 text-primary hover:bg-primary/15">Delivered</Badge>
  }
  if (status === "failed") {
    return <Badge variant="destructive">Email failed</Badge>
  }
  return <Badge variant="secondary">Pending</Badge>
}

export function LeadsTable({ leads }: { leads: Lead[] }) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return leads
    return leads.filter((l) =>
      [l.name, l.email, l.company, l.service, l.message]
        .filter(Boolean)
        .some((field) => String(field).toLowerCase().includes(q)),
    )
  }, [leads, query])

  if (leads.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-12 text-center">
        <p className="text-sm text-muted-foreground">No leads yet. New submissions will appear here.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name, email, message"
          className="pl-9"
          aria-label="Search leads"
        />
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Received</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                  {formatDate(lead.created_at)}
                </TableCell>
                <TableCell className="font-medium text-foreground">
                  {lead.name}
                  {lead.company && (
                    <span className="block text-xs text-muted-foreground">{lead.company}</span>
                  )}
                </TableCell>
                <TableCell>
                  <a
                    href={`mailto:${lead.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {lead.email}
                  </a>
                </TableCell>
                <TableCell className="text-sm text-foreground">{lead.service ?? "-"}</TableCell>
                <TableCell className="max-w-xs text-sm text-muted-foreground">
                  <span className="line-clamp-3 whitespace-pre-wrap">{lead.message}</span>
                </TableCell>
                <TableCell>
                  <StatusBadge status={lead.email_status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">No leads match &quot;{query}&quot;.</p>
      )}
    </div>
  )
}
