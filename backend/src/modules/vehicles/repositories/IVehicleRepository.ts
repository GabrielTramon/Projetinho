import { Vehicle } from "../entities/vehicle";

export interface IVehicleRepository {
    create(vehicle: Vehicle): Promise<void>;
    findById(id: string): Promise<Vehicle | null>;
    findAll(): Promise<Vehicle[]>;
    update(vehicle: Vehicle): Promise<void>;
    delete(id: string): Promise<void>;
}