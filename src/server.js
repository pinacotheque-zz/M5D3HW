import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";

import authorsRouter from "./authors/index.js";

import {notFound, forbidden, catchAllErrorHandler} from './errorHandlers.js'

import blogsRouter from './blogs/index.js'
import { publicFolderPath } from "./lib/fs-tools.js";

const server = express();


const port =  process.env.PORT 

// console.log("DB CONNECTION STRING: ", process.env.MYDBCONNECTIONSTRING)


server.use(express.static(publicFolderPath))
server.use(cors());
server.use(express.json());

server.use(notFound)
server.use(forbidden)
server.use(catchAllErrorHandler)


server.use("/blogs", blogsRouter)
server.use("/authors", authorsRouter);

console.table(listEndpoints(server))

server.listen(port, () => console.log(" Server is running on port : ", port));

server.on("error", (error) =>
  console.log(` Server is not running due to : ${error}`)
);
