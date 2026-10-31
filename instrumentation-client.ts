import { initBotId } from "botid/client/core"

// Vercel BotID: attaches a bot-classification challenge to these requests.
// The server side check lives in app/api/contact/route.ts (checkBotId).
initBotId({
  protect: [{ path: "/api/contact", method: "POST" }],
})
