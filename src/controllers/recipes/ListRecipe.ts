import { Request, Response } from "express";
import { db } from "../../database/prismaConnect";


export class ListRecipe {
    async handle(request: Request, response: Response) {
      try {
        const recipes = await db.recipes.findMany()
        return response.json(recipes)
      }

      catch (e) {
        response.status(500).json({erro: "Erro ao buscar os dados"})
      }

    }
}