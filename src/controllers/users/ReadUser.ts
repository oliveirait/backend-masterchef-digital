import { db } from "../../database/prismaConnect";
import { Request, Response } from "express";


export class ReadUser {
  async handle (request: Request, response: Response) {
    try {
      const user = await db.user.findMany()
      return response.json(user)
    }

    catch (e) {
      return response.json({
        status: "-2", //Erro ao buscar usuario
        message: `Não foi possivel b o usuario. Erro: ${e}`
      })
    }
  }
}