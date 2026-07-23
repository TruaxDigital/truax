const key = process.env.RESEND_API_KEY
if (!key) {
  console.log("RESEND_API_KEY is NOT set")
  process.exit(1)
}
console.log("RESEND_API_KEY present, prefix:", key.slice(0, 3))

const res = await fetch("https://api.resend.com/domains", {
  headers: { Authorization: `Bearer ${key}` },
})
const body = await res.json()
console.log("Status:", res.status)
console.log(JSON.stringify(body, null, 2))
