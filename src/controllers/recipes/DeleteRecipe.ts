import { Request, Response } from "express";
import { db } from "../../database/prismaConnect";


export class DeleteRecipe {
    async handle(request: Request , response: Response) {
        const { id } = request.body
        try {
          const recipes = await db.recipes.delete({
            where: {
              id: id
            }
          })
          return response.json({message: `Registro apagado com sucesso, ${recipes}`})
        }

        catch (e) {
          return response.json({message: `Erro ao apagar registro`})
        }

        
    }
}