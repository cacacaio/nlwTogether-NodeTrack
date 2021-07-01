import { Request, Response } from 'express'

import { AuthenticateUserService } from '../services/AuthenticateUserService'

class AuthenticateController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const authService = new AuthenticateUserService()

    const user = await authService.execute({ email, password })

    return response.json(user)
  }
}

export { AuthenticateController }
