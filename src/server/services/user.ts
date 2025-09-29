import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";
import prismaClient from "../prismaClient";

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const getServerUsers = createServerFn({ method: "GET" }).handler(
  async () => {
    try {
      // const users = await prismaClient.user.findMany({
      //   select: { id: true, email: true }, // avoid returning passwords
      // });
      const first = await prismaClient.user.findFirst();
      console.log({ first });
      return { message: "Fetched users successfully", code: 0 };
    } catch (error) {
      console.error("Error fetching users:", error);
      return { message: `Failed to fetch users: ${error.message}`, code: -1 };
    }
  }
);

export const addServerUser = createServerFn({ method: "POST" })
  .inputValidator(UserSchema)
  .handler(async ({ data }) => {
    console.log("Adding user:", data);
    try {
      const created = await prismaClient.user.create({
        data: {
          email: data.email,
          password: data.password,
        },
      });
      // return minimal info (avoid returning password)
      return { id: created.id, email: created.email };
    } catch (error) {
      console.error("Error creating user:", error);
      return { message: `Failed to create user: ${error.message}`, code: -1 };
    }
  });
