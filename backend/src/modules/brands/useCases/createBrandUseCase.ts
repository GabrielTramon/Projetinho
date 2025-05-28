import { Brand } from "../entities/brand";
import { IBrandRepository } from "../repositories/IBrandRepository";

export class CreateBrandUseCase{
    constructor(private brandRepository: IBrandRepository){}

    async execute(data: {id: string, name: string, fipeCode: string}): Promise<void>{
        const brand = new Brand(data.id,data.name,data.fipeCode)

    await this.brandRepository.create(brand)
    }
}
