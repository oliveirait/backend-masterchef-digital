
const express = require('express')
const server = express();
const cors = require('cors');
import { Request, Response } from "express";
import { router } from "./routes";
server.use(express.json(), cors(), router)


server.get("/", (request: Request, response: Response) => {
    return response.json({
      status: "ok",
      message: "Server is running",
      port: 3333
    })
})

server.listen(3333, () => {
  console.log("Server is running in port 3333")
})