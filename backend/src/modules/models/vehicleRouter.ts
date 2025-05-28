    // src/http/routes/vehicleRoutes.ts
import { Router } from "express";
import { PrismaVehicleRepository } from "../repositories/PrismaVehicleRepository";
import { CreateVehiclesUseCase } from "../useCases/createVehiclesUseCase";
import { prisma } from "../infra/prisma/prismaClient";
import { FindAllVehiclesUseCase } from "../useCases/findAllVehiclesUseCase";
import { Vehicle } from "../entities/vehicle";
import { updateVehicleUseCase } from "../useCases/updateVehicleUseCase";
import { DeleteVehiclesUseCase } from "../useCases/deleteVehicleUseCase";
import { findByIdUseCase, findByIdVehicleUseCase } from "../useCases/findByIdVehiclesUseCase";

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

vehicleRoutes.get("/vehicles/all", async (req, res) => {
    try{
        const vehiclesRepository = new PrismaVehicleRepository(prisma);
        const findAllVehicles = new FindAllVehiclesUseCase(vehiclesRepository);
        const vehicles = await findAllVehicles.execute();
        return res.json(vehicles)
    }catch(error){
        console.error("Error", error);
        return res.status(500).json({ error: "Erro ao criar veículo." });
    }
});

vehicleRoutes.get("/vehicles/vehicle/:id", async (req, res) => {
  const {id} = req.params;

  try{
    const vehicleRepository = new PrismaVehicleRepository(prisma);
    const findByIdVehicles = new findByIdVehicleUseCase(vehicleRepository);
    const vehicles = await findByIdVehicles.execute(id);
    return res.json(vehicles)
  }catch(error){
    console.error("Error", error);
    return res.status(500).json({ error: "Erro ao visualizar o veiculo com id"})
  }
})

vehicleRoutes.put("/vehicles/:id", async (req, res) => {
  const {id} = req.params;
  const {fipeCode,value,fuelTypeId, referenceMonth,referenceYear,vehicleYear,modelId} = req.body

  const vehicle = new Vehicle(id,fipeCode,value,fuelTypeId,referenceMonth,referenceYear,vehicleYear,modelId);

  try{
    const vehicleRepository  = new PrismaVehicleRepository(prisma)
    const updateVehicles = new updateVehicleUseCase(vehicleRepository )
    await updateVehicles.execute(vehicle)
    return res.status(204).send();
  }catch(error){
    console.error("Error ao atualizar o veiculo", error)
    return res.status(500).json({error:"ERROR"})
  }
})

vehicleRoutes.delete("/vehicles/:id", async (req, res) => {
  const { id } = req.params;
  const vehicleRepository = new PrismaVehicleRepository(prisma);
  const deleteVehicle = new DeleteVehiclesUseCase(vehicleRepository);

  try {
    await deleteVehicle.execute(id);
    return res.status(200).json({ message: "Veículo deletado com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar veículo:", error);
    return res.status(500).json({ error: "Erro ao deletar veículo." });
  }
});

export { vehicleRoutes };
