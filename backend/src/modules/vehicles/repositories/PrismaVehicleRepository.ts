import { PrismaClient } from "@prisma/client";
import { Vehicle } from "../entities/vehicle";
import { IVehicleRepository } from "./IVehicleRepository";

export class PrismaVehicleRepository implements IVehicleRepository{
    constructor(private prisma: PrismaClient){}

    async create(vehicle: Vehicle): Promise<void> {
        await this.prisma.vehicle.create({
            data:{
                id: vehicle.id,
                fipeCode: vehicle.fipeCode,
                value: vehicle.value,
                fuelTypeId: vehicle.fuelTypeId,
                referenceMonth: vehicle.referenceMonth,
                referenceYear: vehicle.referenceYear,
                vehicleYear: vehicle.vehicleYear,
                modelId: vehicle.modelId
            },
        });
    }

    async findById(id: string): Promise<Vehicle | null> {
        const vehicleData = await this.prisma.vehicle.findUnique({
            where:{id},
        });

        if(!vehicleData) return null;

        return new Vehicle(vehicleData.id, vehicleData.fipeCode,vehicleData.value,
                        vehicleData.fuelTypeId,vehicleData.referenceMonth,vehicleData.referenceYear,
                        vehicleData.vehicleYear,vehicleData.modelId)
    }
}