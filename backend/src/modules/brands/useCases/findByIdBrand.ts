import { Brand } from "@prisma/client";
import { IBrandRepository } from "../repositories/IBrandRepository";

export class FindByIdBrandUseCase{
    constructor(private brandRepository: IBrandRepository){}

    async execute(id:string): Promise<Brand | null>{
        const brand = await this.brandRepository.findById(id);
        return brand
    }
}