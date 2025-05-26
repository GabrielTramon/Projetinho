import { Vehicle } from "../entities/vehicle";

export interface IVehicleRepository {
    create(vehicle: Vehicle): Promise<void>;
    findById(id: string): Promise<Vehicle | null>
}