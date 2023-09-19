import { Request, Response } from "express";
import { db } from "../../database/prismaConnect";


export class CreateRecipe {
    async handle(request: Request , response: Response) {
        const { title, description, instruction } = request.body
        const recipes = await db.recipes.create({
          data: {
            title,
            description,
            instruction
          }
        })
        return response.json(recipes)
    }
}

