import { Router } from "express";
import { PrismaVehicleRepository } from "../repositories/PrismaVehicleRepository";
import { FindAllVehiclesUseCase } from "../useCases/findAllVehiclesUseCase";

const vehicleRoutes = Router();

vehicleRoutes.get("/"), async (req, res) => {
    const vehiclesRepository = new PrismaVehicleRepository();
    const findAllVehiclesUseCase = new FindAllVehiclesUseCase(vehiclesRepository);

    const vehicles = await findAllVehiclesUseCase.execute();

    return res.json(vehicles)
}

export {vehicleRoutes};