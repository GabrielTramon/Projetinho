// src/server.ts
import "reflect-metadata";
import express from "express";
import { userRoutes } from "./modules/users/routes/userRouter";

const app = express();
app.use(express.json());

app.use("/", userRoutes)


app.listen(3001, () => console.log("Server running at http://localhost:3001"));
