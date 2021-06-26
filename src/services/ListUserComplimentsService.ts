import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'
import { getCustomRepository } from 'typeorm'

export class ListUserComplimentsService {
  async execute(user_receiver: string) {
    console.log(user_receiver)
    const complimentRepositories = getCustomRepository(ComplimentsRepositories)
    const complimentsList = await complimentRepositories.find({
      where: { user_receiver },
      relations: ['userSender', 'userReceiver', 'tag'],
    })
    return complimentsList
  }
}
