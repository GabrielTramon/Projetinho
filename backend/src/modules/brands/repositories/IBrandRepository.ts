import { Brand } from "../entities/brand";

export interface IBrandRepository{
    create(brand: Brand): Promise<void>;
    findById(id: string): Promise<Brand | null>;
    findAll(): Promise<Brand[]>;
    update(brand: Brand): Promise<void>;
    delete(id: string): Promise<void>
}
