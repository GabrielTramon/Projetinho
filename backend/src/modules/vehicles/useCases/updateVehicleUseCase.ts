import { Vehicle } from "../entities/vehicle";
import { IVehicleRepository } from "../repositories/IVehicleRepository";

export class updateVehicleUseCase{
    constructor(private vechicleRepository: IVehicleRepository){}

    async execute(vehicle: Vehicle): Promise<void>{
        await this.vechicleRepository.update(vehicle)
    }
}