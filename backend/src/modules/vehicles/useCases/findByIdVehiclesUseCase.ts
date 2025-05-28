import { Vehicle } from "../entities/vehicle";
import { IVehicleRepository } from "../repositories/IVehicleRepository";

export class findByIdVehicleUseCase{
    constructor(private vehiclesRepository: IVehicleRepository){}

    async execute(id:string): Promise<Vehicle | null>{
        const vehicle = await this.vehiclesRepository.findById(id);
        return vehicle
    }
}