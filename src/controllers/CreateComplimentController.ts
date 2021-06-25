import { Request, Response } from 'express'

import { CreateComplimentsService } from '../services/CreateComplimentsService'

export class CreateComplimentController {
  async handle(req: Request, res: Response) {
    const { tag_id, user_sender, user_receiver, message } = req.body

    const createCompliment = new CreateComplimentsService()

    const compliment = await createCompliment.execute({
      tag_id,
      user_sender,
      user_receiver,
      message,
    })

    return res.status(200).json(compliment)
  }
}
