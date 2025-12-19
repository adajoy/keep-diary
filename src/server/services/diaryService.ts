import { createServerFn } from "@tanstack/react-start"

import prismaClient from "../prismaClient"
import { z } from "zod"

export const createDiaryEntry = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      userId: z.string(),
      title: z.string().optional(),
      content: z.string(),
    })
  )
  .handler(async ({ data }) => {
    const { userId, title, content } = data
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
        title,
        content,
      },
    })
    return entry
  })

export const getUserDiaries = createServerFn({ method: "GET" })
  .inputValidator(
    z.object({
      userId: z.string(),
    })
  )
  .handler(async ({ data }) => {
    try {
      const diaries = await prismaClient.diary.findMany({
        where: { userId: data.userId },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          content: true,
          createdAt: true,
          updatedAt: true,
        },
      })
      return { data: diaries, code: 0 }
    } catch (error) {
      console.error("Error fetching diaries:", error)
      return { message: `Failed to fetch diaries: ${error.message}`, code: -1 }
    }
  })

export const getDiaryDetail = createServerFn({ method: "GET" })
  .inputValidator(
    z.object({
      diaryId: z.string(),
    })
  )
  .handler(async ({ data }) => {
    try {
      const diary = await prismaClient.diary.findUnique({
        where: { id: data.diaryId },
        select: {
          id: true,
          title: true,
          content: true,
          createdAt: true,
          updatedAt: true,
          userId: true,
        },
      })

      if (!diary) {
        return { message: "Diary not found", code: -1 }
      }

      return { data: diary, code: 0 }
    } catch (error) {
      console.error("Error fetching diary:", error)
      return { message: `Failed to fetch diary: ${error.message}`, code: -1 }
    }
  })

export const deleteDiary = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      diaryId: z.string(),
      userId: z.string(),
    })
  )
  .handler(async ({ data }) => {
    try {
      // First verify the diary exists and belongs to the user
      const diary = await prismaClient.diary.findUnique({
        where: { id: data.diaryId },
        select: { userId: true },
      })

      if (!diary) {
        return { message: "Diary not found", code: -1 }
      }

      if (diary.userId !== data.userId) {
        return { message: "Unauthorized", code: -1 }
      }

      await prismaClient.diary.delete({
        where: { id: data.diaryId },
      })

      return { message: "Diary deleted successfully", code: 0 }
    } catch (error) {
      console.error("Error deleting diary:", error)
      return { message: `Failed to delete diary: ${error.message}`, code: -1 }
    }
  })
