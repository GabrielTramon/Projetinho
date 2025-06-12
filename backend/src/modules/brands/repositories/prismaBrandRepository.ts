import { PrismaClient } from "@prisma/client";
import { IBrandRepository } from "./IBrandRepository";
import { Brand } from "../entities/brand";

export class PrismaBrandRepository implements IBrandRepository{
    constructor(private prisma: PrismaClient){}

    async create(brand: Brand): Promise<void>{
        await this.prisma.brand.create({
            data:{
                id: brand.id,
                name: brand.name,
                fipeCode: brand.fipeCode,
            }
        })
    }

    async findById(id: string): Promise<Brand | null> {
        const brandData = await this.prisma.brand.findUnique({
            where:{id},
        });

        if(!brandData) return null;

        return new Brand(brandData.id, brandData.name, brandData.fipeCode)
    }

    async findAll(): Promise<Brand[]> {
        const viewBrands = await this.prisma.brand.findMany();
        return viewBrands
    }

    async update(brand: Brand): Promise<void> {
        await this.prisma.brand.update({
            where: {id: brand.id},
            data:{
                name: brand.name,
                fipeCode: brand.fipeCode,
            }
        })
    }

    async delete(id:string): Promise<void>{
        await this.prisma.brand.delete({
            where: {id},
        })
    }
}