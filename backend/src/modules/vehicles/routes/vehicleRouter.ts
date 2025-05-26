    // src/http/routes/vehicleRoutes.ts
import { Router } from "express";
import { PrismaVehicleRepository } from "../repositories/PrismaVehicleRepository";
import { CreateVehiclesUseCase } from "../useCases/createVehiclesUseCase";
import { prisma } from "../infra/prisma/prismaClient";

const vehicleRoutes = Router();

vehicleRoutes.post("/vehicles", async (req, res) => {
  const { id, fipeCode,value,fuelTypeId, referenceMonth,referenceYear,vehicleYear,modelId } = req.body;

  const vehicleRepository = new PrismaVehicleRepository(prisma);
  const createVehicle = new CreateVehiclesUseCase(vehicleRepository);

  try {
    await createVehicle.execute({ id,fipeCode,value,fuelTypeId, referenceMonth,referenceYear,vehicleYear,modelId});
    console.log("Veiculo Criado com Sucesso!")
    return res.status(201).json({ message: "Veículo criado com sucesso!" });
  } catch (error) {
    console.error("error ao criar veiculo", error);
    return res.status(500).json({ error: "Erro ao criar veículo." });
  }
});

export { vehicleRoutes };
