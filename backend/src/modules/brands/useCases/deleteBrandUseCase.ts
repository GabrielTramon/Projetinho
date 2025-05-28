import { IBrandRepository } from "../repositories/IBrandRepository";

export class DeleteBrandUseCase{
    constructor(private brandRepository: IBrandRepository){}

    async execute(id:string): Promise<void>{
        await this.brandRepository.delete(id)
    }
}