import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";

import authorsRouter from "./authors/index.js";

const server = express();


const port = 3001;

server.use(cors());
server.use(express.json());



server.use("/authors", authorsRouter);

console.table(listEndpoints(server))

server.listen(port, () => console.log(" Server is running on port : ", port));

server.on("error", (error) =>
  console.log(` Server is not running due to : ${error}`)
);
