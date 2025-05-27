// src/server.ts
import express from "express";
import { vehicleRoutes } from "./modules/vehicles/routes/vehicleRouter";

const app = express();

app.use(express.json());
app.use(vehicleRoutes);

app.listen(3001, () => console.log("Server running at http://localhost:3001"));
