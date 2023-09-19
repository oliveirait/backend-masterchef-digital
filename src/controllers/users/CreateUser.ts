import { Request, Response } from "express";
import { db } from "../../database/prismaConnect";

//class create user
export class CreateNewUser {
  //action function
  async handle (request: Request, response: Response) {
    try {
      const { name, email, password } = request.body
      const created = await db.user.create({
        data: {
          name,
          email,
          password
        }
      })
      return response.json(created)
    }

    catch (e) {
      return response.json({
        status: "-1", //Erro ao criar usuario
        message: `Não foi possivel criar o usuario. Erro: ${e}`
      })
    }
    
    
  }
}