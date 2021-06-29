import 'reflect-metadata'
import './database'
import 'express-async-errors'

import express, { NextFunction, Request, Response } from 'express'

import { router } from './routes'

const cors = require('cors')

process.env.key = '4f9aaffe5e864530204f758ab98df580'
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.use((err: Error, _request: Request, response: Response, _next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message,
      // stack: err.stack,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  })
})

app.listen(3000, () => console.log('Server is Running'))
