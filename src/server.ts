
const express = require('express')
const server = express();
const cors = require('cors');

import { router } from "./routes";


server.use(express.json(), cors(), router)


server.listen(3333, () => {
  console.log("Server is running in port 3333")
})