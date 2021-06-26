import { Request, Response } from 'express'

import { ListUserService } from '../services/ListUserService'

export class ListUserController {
  async handle(req: Request, res: Response) {
    const userService = new ListUserService()

    const users = await userService.execute()

    return res.json(users)
  }
}
