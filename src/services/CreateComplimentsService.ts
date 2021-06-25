import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { getCustomRepository } from 'typeorm'

interface IComplimentsReq {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

export class CreateComplimentsService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentsReq) {
    if (user_sender === user_receiver) {
      throw new Error('Cannot Compliment Yourself :(')
    }
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const userRepository = getCustomRepository(UsersRepositories)

    const userReceiverExists = userRepository.findOne(user_receiver)

    if (!userReceiverExists) {
      throw new Error("Complimented User Doesn't Exist ")
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    })

    await complimentsRepositories.save(compliment)

    return compliment
  }
}
