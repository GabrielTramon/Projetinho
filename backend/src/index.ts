// src/server.ts
import express from "express";
import { vehicleRoutes } from "./modules/vehicles/routes/vehicleRouter";
import { brandRoutes } from "./modules/brands/routes/brandRouter";

const app = express();

app.use(express.json());
app.use(vehicleRoutes);
app.use(brandRoutes)

app.listen(3001, () => console.log("Server running at http://localhost:3001"));
