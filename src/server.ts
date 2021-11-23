import 'reflect-metadata'
import './database'
import 'express-async-errors'

import express, { NextFunction, Request, Response } from 'express'

import { router } from './routes'

require('dotenv').config()
const cors = require('cors')

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

app.listen(3001, () => console.log('Server is Running'))
