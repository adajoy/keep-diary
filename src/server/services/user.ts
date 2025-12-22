import { z } from "zod"
import { createServerFn } from "@tanstack/react-start"
import prismaClient from "../prismaClient"
import { generateToken } from "../utils/jwt"
import { deleteCookie, setCookie } from "@tanstack/react-start/server"

export const getServerUsers = createServerFn({ method: "GET" }).handler(
  async () => {
    try {
      const users = await prismaClient.user.findMany({
        select: { id: true, email: true }, // avoid returning passwords
      })
      return { data: users.map((i) => i.id), code: 0 }
    } catch (error) {
      console.error("Error fetching users:", error)
      return { message: `Failed to fetch users: ${error.message}`, code: -1 }
    }
  }
)

export const addServerUser = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      email: z.email(),
      password: z.string().min(6),
    })
  )
  .handler(async ({ data }) => {
    console.log("Adding user:", data)
    try {
      const created = await prismaClient.user.create({ data })
      return { id: created.id, email: created.email }
    } catch (error) {
      console.error("Error creating user:", error)
      return { message: `Failed to create user: ${error.message}`, code: -1 }
    }
  })

export const loginUser = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      email: z.string().email(),
      password: z.string().min(1),
    })
  )
  .handler(async ({ data }) => {
    try {
      const user = await prismaClient.user.findUnique({
        where: { email: data.email },
      })

      if (!user) {
        return { message: "Invalid email or password", code: -1 }
      }

      if (user.password !== data.password) {
        return { message: "Invalid email or password", code: -1 }
      }

      const token = await generateToken({ userId: user.id })
      setCookie("auth", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })

      return { code: 0 }
    } catch (error) {
      console.error("Error during login:", error)
      return { message: `Failed to login: ${error.message}`, code: -1 }
    }
  })

export const signoutUser = createServerFn({ method: "POST" }).handler(
  async () => {
    deleteCookie("auth")
    return { code: 0 }
  }
)
