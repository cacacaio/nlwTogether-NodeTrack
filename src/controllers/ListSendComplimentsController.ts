import { Request, Response } from 'express'

import { ListUserSenderComplimentsService } from '../services/ListUserSenderComplimentsService'

export class ListSendComplimentsController {
  async handle(req: Request, res: Response) {
    const { userId } = req

    const listCompliments = new ListUserSenderComplimentsService()

    const compliments = await listCompliments.execute(userId)

    return res.status(200).json(compliments)
  }
}
