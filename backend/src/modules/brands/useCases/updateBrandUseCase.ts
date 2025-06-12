import { Brand } from "@prisma/client";
import { IBrandRepository } from "../repositories/IBrandRepository";

export class UpdateBrandUseCase{
    constructor(private brandRepository: IBrandRepository){}

    async execute(brand: Brand): Promise<void>{
        await this.brandRepository.update(brand)
    }
}