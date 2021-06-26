import { UsersRepositories } from '../repositories/UsersRepositories'
import { classToPlain } from 'class-transformer'
import { getCustomRepository } from 'typeorm'

export class ListUserService {
  async execute() {
    const userRepository = getCustomRepository(UsersRepositories)
    const users = await userRepository.find()

    return classToPlain(users)
  }
}
