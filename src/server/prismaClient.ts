// Require the generated Prisma client at runtime using createRequire so that
// Vite doesn't try to bundle the CommonJS output into the ESM SSR build.
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { PrismaClient } = require("../generated/prisma");

const prismaClient = new PrismaClient({
  log: ["query"],
});

export default prismaClient;
