import { UsersRepositories } from '../repositories/UsersRepositories'
import { compare } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import { sign } from 'jsonwebtoken'

interface IAuthService {
  email: string
  password: string
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthService) {
    const userRepository = getCustomRepository(UsersRepositories)
    if (!email) {
      throw new Error('No Email Provided')
    }
    if (!password) {
      throw new Error('No Password Provided')
    }
    const user = await userRepository.findOne({ email })
    if (!user) {
      throw new Error('Email/Password Incorrect')
    }
    const passwordCorrect = await compare(password, user.password)
    if (!passwordCorrect) {
      return 'Email/Password Incorrect'
    }

    const token = sign({ email: user.email }, process.env.KEY, {
      subject: user.id,
      expiresIn: '1d',
    })
    return token
  }
}
