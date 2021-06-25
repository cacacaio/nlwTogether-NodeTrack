import { AuthenticateController } from './controllers/AuthenticateController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { Router } from 'express'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuth } from './middlewares/ensureAuth'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authController = new AuthenticateController()
const createComplimentController = new CreateComplimentController()

router.post('/users', createUserController.handle)
router.post('/tags', ensureAuth, ensureAdmin, createTagController.handle)
router.post('/login', authController.handle)
router.post('/compliments', ensureAuth, createComplimentController.handle)

export { router }
