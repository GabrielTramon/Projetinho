import { IVehicleRepository } from "../repositories/IVehicleRepository";

export class DeleteVehiclesUseCase{
    constructor(private vehicleRepository:IVehicleRepository){}

    async execute(id:string): Promise<void>{
        await this.vehicleRepository.delete(id);
    }
}