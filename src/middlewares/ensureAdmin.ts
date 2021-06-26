import { NextFunction, Request, Response } from 'express'

import { UsersRepositories } from '../repositories/UsersRepositories'
import { getCustomRepository } from 'typeorm'

export const ensureAdmin = async (request: Request, response: Response, next: NextFunction) => {
  const { userId } = request
  const usersRepository = getCustomRepository(UsersRepositories)

  const { admin } = await usersRepository.findOne({ id: userId })

  if (admin) {
    return next()
  }

  return response.status(401).json({ error: 'Unauthorized' })
}
