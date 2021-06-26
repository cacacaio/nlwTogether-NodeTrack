import { Request, Response } from 'express'

import { ListUserComplimentsService } from '../services/ListUserComplimentsService'

export class ListComplimentsController {
  async handle(req: Request, res: Response) {
    const { userId } = req

    const listCompliments = new ListUserComplimentsService()

    const compliments = await listCompliments.execute(userId)

    return res.status(200).json(compliments)
  }
}
