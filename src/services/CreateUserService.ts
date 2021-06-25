import { UsersRepositories } from '../repositories/UsersRepositories'
import { getCustomRepository } from 'typeorm'
import { hash } from 'bcryptjs'

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
  password: string
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)
    if (!email) {
      throw new Error('No Password Provided')
    }
    if (!password) {
      throw new Error('No Password Provided')
    }
    const userExists = await usersRepository.findOne({
      email,
    })
    if (userExists) {
      throw new Error('User Already Exists')
    }
    //Salt 8 Padrão
    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }
