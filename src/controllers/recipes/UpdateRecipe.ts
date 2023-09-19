import { Request, Response } from "express";
import { db } from "../../database/prismaConnect";


export class UpdateRecipe {
    async handle(request: Request , response: Response) {
        const { id, title, description, instruction } = request.body
        try {
          const recipes = await db.recipes.update({
            where: {
              id: id
            },
            data: {
              title,
              description,
              instruction
            }
          })
          return response.json({message: `Registro atualizado com sucesso`})
        }

        catch (e) {
          return response.json({message: `Erro ao atualizar o registro`})
        }

        
    }
}