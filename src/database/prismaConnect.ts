import { PrismaClient } from "@prisma/client"; 

//database connection
const db = new PrismaClient()

export { db }