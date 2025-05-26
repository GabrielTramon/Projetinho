import { IVehicleRepository } from "../repositories/IVehicleRepository";
import { Vehicle } from "../entities/vehicle";

export class CreateVehiclesUseCase{
    constructor(private vehiclesRepository: IVehicleRepository){}

    async execute(data: {id: string, fipeCode: string, value: number, fuelTypeId: string, 
                        referenceMonth: number,referenceYear: number, vehicleYear: number,modelId: string}): Promise<void>{

        const vehicle = new Vehicle(data.id, data.fipeCode,data.value,
                                    data.fuelTypeId,data.referenceMonth
                                    ,data.referenceYear,data.vehicleYear,
                                    data.modelId)

        await this.vehiclesRepository.create(vehicle)
    }
}