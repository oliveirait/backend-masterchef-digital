import { db } from "../../database/prismaConnect";
import { Request, Response } from "express";


export class UpdateUser {
  async handle (request: Request, response: Response) {
    try {
      const { id, name, password } = request.body
      await db.user.update({
        where: {
          id
        },
        data: {
          name: name,
          password: password
        }
      })

      const updated = await db.user.findMany()
      return response.json(updated)
    }

    catch (e) {
      return response.json({
        status: "-3", //Erro ao atualizar o usuario
        message: `Não foi possivel atualiazar os dados do usuario. Erro: ${e}`
      })
    }
  }
}