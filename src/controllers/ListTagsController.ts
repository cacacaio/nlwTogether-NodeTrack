import { Request, Response } from 'express'

import { ListTagsService } from '../services/ListTagsService'

export class ListTagsController {
  async handle(req: Request, res: Response) {
    const ListTags = new ListTagsService()
    const tags = await ListTags.execute()
    return res.json(tags)
  }
}
