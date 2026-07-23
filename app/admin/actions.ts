"use server"

import { redirect } from "next/navigation"
import { createAdminSession, destroyAdminSession, verifyPassword } from "@/lib/admin-auth"

export async function login(_prevState: string | null, formData: FormData): Promise<string | null> {
  const password = String(formData.get("password") ?? "")
  if (!verifyPassword(password)) {
    return "Incorrect password"
  }
  await createAdminSession()
  redirect("/admin/leads")
}

export async function logout(): Promise<void> {
  await destroyAdminSession()
  redirect("/admin")
}
