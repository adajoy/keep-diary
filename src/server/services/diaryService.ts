import { createServerFn } from "@tanstack/react-start"

import prismaClient from "../prismaClient"
import { z } from "zod"
import { requireUser } from "../utils/requireUser"

export const createDiaryEntry = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      title: z.string().optional(),
      content: z.string(),
    })
  )
  .handler(async ({ data }) => {
    const {
      payload: { userId },
    } = await requireUser()
    const { title, content } = data
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

export const getUserDiaries = createServerFn({ method: "GET" }).handler(
  async () => {
    try {
      const {
        payload: { userId },
      } = await requireUser()
      const diaries = await prismaClient.diary.findMany({
        where: { userId },
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
  }
)

export const getDiaryDetail = createServerFn({ method: "GET" })
  .inputValidator(
    z.object({
      diaryId: z.string(),
    })
  )
  .handler(async ({ data }) => {
    try {
      const {
        payload: { userId },
      } = await requireUser()
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

      if (diary.userId !== userId) {
        return { message: "Unauthorized", code: -1 }
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
    })
  )
  .handler(async ({ data }) => {
    try {
      const {
        payload: { userId },
      } = await requireUser()
      // First verify the diary exists and belongs to the user
      const diary = await prismaClient.diary.findUnique({
        where: { id: data.diaryId },
        select: { userId: true },
      })

      if (!diary) {
        return { message: "Diary not found", code: -1 }
      }

      if (diary.userId !== userId) {
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

export const getDailyWordCounts = createServerFn({ method: "GET" }).handler(
  async () => {
    try {
      const {
        payload: { userId },
      } = await requireUser()
      const diaries = await prismaClient.diary.findMany({
        where: { userId },
        select: {
          content: true,
          createdAt: true,
        },
      })

      // Group by date and count words
      const dailyCounts: Record<string, number> = {}

      diaries.forEach((diary) => {
        const date = new Date(diary.createdAt)
        const dateKey = date.toISOString().split("T")[0] // YYYY-MM-DD format
        const wordCount = diary.content
          .trim()
          .split(/\s+/)
          .filter((word) => word.length > 0).length

        if (dailyCounts[dateKey]) {
          dailyCounts[dateKey] += wordCount
        } else {
          dailyCounts[dateKey] = wordCount
        }
      })

      // Convert to array format for charting
      const chartData = Object.entries(dailyCounts)
        .map(([date, count]) => ({
          date,
          words: count,
        }))
        .sort((a, b) => a.date.localeCompare(b.date))

      return { data: chartData, code: 0 }
    } catch (error) {
      console.error("Error fetching daily word counts:", error)
      return {
        message: `Failed to fetch word counts: ${error.message}`,
        code: -1,
      }
    }
  }
)
