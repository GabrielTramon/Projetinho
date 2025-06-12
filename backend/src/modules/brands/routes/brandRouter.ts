import { Router } from "express";
import { CreateBrandUseCase } from "../useCases/createBrandUseCase";
import { prisma } from "../infra/prisma/prismaClient";
import { FindByIdBrandUseCase } from "../useCases/findByIdBrand";
import { FindAllBrandsUseCase } from "../useCases/findAllBrands";
import { PrismaBrandRepository } from "../repositories/PrismaBrandRepository";
import { Brand } from "../entities/brand";
import { updateVehicleUseCase } from "../../vehicles/useCases/updateVehicleUseCase";
import { UpdateBrandUseCase } from "../useCases/updateBrandUseCase";
import { Prisma } from "@prisma/client";
import { DeleteBrandUseCase } from "../useCases/deleteBrandUseCase";

const brandRoutes = Router();

brandRoutes.post("/brands", async (req,res) => {
    const {id,name,fipeCode} = req.body;

    const brandRepository = new PrismaBrandRepository(prisma)
    const createBrand = new CreateBrandUseCase(brandRepository)

    try{
        await createBrand.execute({id,name,fipeCode})
        console.log("Marca criada com sucesso!")
        return res.status(201).json({message: "Marca Criada com sucesso!!"})
    }catch(error){
        console.error("Error ao criar a marca", error)
        return res.status(500).json({error: "Erro ao criar a marca"})
    }
})

brandRoutes.get("/brands/brand/:id", async (req, res) =>{
    const {id} = req.params;

    try{
        const brandRepository = new PrismaBrandRepository(prisma);
        const findByIdBrand = new FindByIdBrandUseCase(brandRepository)
        const brands = await findByIdBrand.execute(id);
        return res.json(brands)
    }catch(error){
        console.error("Error", error);
        return res.status(500).json({error: "Erro ao visualizar a marca"})
    }
})

brandRoutes.get("/brands/all", async (req, res) =>{
    try{
        const brandRepository = new PrismaBrandRepository(prisma)
        const findAllBrands = new FindAllBrandsUseCase(brandRepository)
        const brands = await findAllBrands.execute();
        return res.json(brands)
    }catch(error){
        console.error("Error", error);
        return res.status(500).json({ error: "Erro ao criar veículo." });
    }
})

brandRoutes.put("/brands/brand/:id", async (req, res) =>{
    const {id} = req.params
    const {name,fipeCode} = req.body

    const brand = new Brand(id,name,fipeCode)

    try{
        const brandRepository = new PrismaBrandRepository(prisma)
        const updateBrands = new UpdateBrandUseCase(brandRepository)
        await updateBrands.execute(brand)
        return res.status(204).send();
    }catch(error){
        console.error("Error", error);
        return res.status(500).json({ error: "Erro ao criar veículo." });
    }
})

brandRoutes.delete("/brands/brand/:id", async (req,res) =>{
    const {id} = req.params
    const brandRepository = new PrismaBrandRepository(prisma);
    const deleteBrand = new DeleteBrandUseCase(brandRepository);

    try {
        await deleteBrand.execute(id);
        return res.status(200).json({ message: "Veículo deletado com sucesso!" });
      } catch (error) {
        console.error("Erro ao deletar veículo:", error);
        return res.status(500).json({ error: "Erro ao deletar veículo." });
      }
})

export {brandRoutes};