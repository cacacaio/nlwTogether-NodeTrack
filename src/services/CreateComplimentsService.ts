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
    console.log(user_receiver)

    const userReceiverExists = await userRepository.findOne({ where: { email: user_receiver } })
    console.log(userReceiverExists)
    if (!userReceiverExists) {
      throw new Error("Complimented User Doesn't Exist ")
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver: userReceiverExists.id,
      user_sender,
      message,
    })

    await complimentsRepositories.save(compliment)

    return compliment
  }
}
