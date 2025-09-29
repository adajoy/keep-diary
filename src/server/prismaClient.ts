import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";

const prismaClient = new PrismaClient({
  log: ["query"],
});

export default prismaClient;
