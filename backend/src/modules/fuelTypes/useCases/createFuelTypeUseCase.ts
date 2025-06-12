import { FuelType } from "../entities/fuelType";
import { IFuelType } from "../repositories/IFuelTypeRepository";

export class CreateFuelTypeUseCase{
    constructor(private fuelTypeRepository: IFuelType){}
    
    async execute(data: {id: string,name:string,abbrevietion:string}): Promise<void>{
        const fuelType = new FuelType(data.id, data.id, data.abbrevietion)
    
    await this.fuelTypeRepository.create(fuelType)
    }
}