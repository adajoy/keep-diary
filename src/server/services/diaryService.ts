import { createServerFn } from "@tanstack/react-start"

import prismaClient from "../prismaClient"
import { z } from "zod"

export const createDiaryEntry = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      userId: z.string(),
      content: z.string(),
    })
  )
  .handler(async ({ data }) => {
    const { userId, content } = data
    // validate user exists
    const user = await prismaClient.user.findUnique({
      where: { id: userId },
    })
    if (!user) {
      throw new Error("User not found")
    }
    const entry = await prismaClient.diary.create({
      data: {
        user: { connect: { id: userId } },
        content,
      },
    })
    return entry
  })
