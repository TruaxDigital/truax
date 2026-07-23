import { redirect } from "next/navigation"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { AdminLoginForm } from "@/components/admin/login-form"

export const metadata = {
  title: "Admin Login | Truax Marketing",
  robots: { index: false, follow: false },
}

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin/leads")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">Lead Dashboard</h1>
          <p className="mt-2 text-sm text-muted-foreground">Enter the admin password to continue</p>
        </div>
        <AdminLoginForm />
      </div>
    </main>
  )
}
