import fs from "node:fs";
import { createServerFn } from "@tanstack/react-start";

// import prismaClient from "../db";

// export async function createDiaryEntry(
//   userId: string,
//   data: { content: string }
// ) {
//   if (!userId) throw new Error("unauthenticated");
//   if (!data.content?.trim()) throw new Error("content_required");

//   const entry = await prismaClient.diaryEntry.create({
//     data: {
//       userId,
//       content: data.content,
//     },
//   });

//   return entry;
// }

export const createDiaryEntry = createServerFn({ method: "POST" }).handler(
  () => {
    return {
      success: true,
      data: fs.readdirSync("."),
    };
  }
);
