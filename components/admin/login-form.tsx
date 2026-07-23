"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { login } from "@/app/admin/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Loader2 } from "lucide-react"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Signing in
        </>
      ) : (
        "Sign in"
      )}
    </Button>
  )
}

export function AdminLoginForm() {
  const [error, formAction] = useActionState(login, null)

  return (
    <form action={formAction} className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-brand">
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          required
        />
      </div>
      {error && (
        <p className="flex items-center gap-2 text-sm text-destructive" role="alert">
          <AlertCircle className="size-4" />
          {error}
        </p>
      )}
      <SubmitButton />
    </form>
  )
}
