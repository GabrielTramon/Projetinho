import { FuelType } from "../entities/fuelType";

export interface IFuelType{
    create(fuelType: FuelType): Promise<void>
}