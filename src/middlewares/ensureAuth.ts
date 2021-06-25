import { NextFunction, Request, Response } from 'express'

import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  const tokenBearer = req.headers.authorization

  const token = tokenBearer.split(' ')[1]

  if (!tokenBearer) {
    return res.status(401).end()
  }
  try {
    const { sub } = verify(token, process.env.key) as IPayload
    req.userId = sub
    return next()
  } catch (e) {
    return res.status(401).end()
  }
}
