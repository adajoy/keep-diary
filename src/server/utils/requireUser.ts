import { getCookie } from "@tanstack/react-start/server"
import { verifyToken } from "../utils/jwt"

export async function requireUser() {
  const token = getCookie("auth")
  if (!token) throw new Error("Unauthorized")

  try {
    const { payload } = await verifyToken(token)
    return payload
  } catch {
    throw new Error("Unauthorized")
  }
}
