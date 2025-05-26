import { Vehicle } from "../entities/vehicle";
import { IVehicleRepository } from "../repositories/IVehicleRepository";

export class FindAllVehiclesUseCase{
    constructor(private vehiclesRepository: IVehicleRepository){}

    async execute(): Promise<Vehicle[]> {
        const vehicle = await this.vehiclesRepository.findAll();
        return vehicle;
    }
}