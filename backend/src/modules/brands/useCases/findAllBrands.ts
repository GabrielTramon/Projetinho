import { Brand } from "@prisma/client";
import { IBrandRepository } from "../repositories/IBrandRepository";

export class FindAllBrandsUseCase{
    constructor(private brandRepository: IBrandRepository){}

    async execute(): Promise<Brand[]>{
        const brand = await this.brandRepository.findAll();
        return brand
    }
}