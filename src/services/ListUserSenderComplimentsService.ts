import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'
import { getCustomRepository } from 'typeorm'

export class ListUserSenderComplimentsService {
  async execute(user: string) {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories)
    const complimentsList = await complimentRepositories.find({ user_sender: user })
    return complimentsList
  }
}
