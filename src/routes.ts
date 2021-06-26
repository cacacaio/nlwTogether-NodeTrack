import { AuthenticateController } from './controllers/AuthenticateController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { ListComplimentsController } from './controllers/ListReceiveComplimentsController'
import { ListSendComplimentsController } from './controllers/ListSendComplimentsController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUserController } from './controllers/ListUserController'
import { Router } from 'express'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuth } from './middlewares/ensureAuth'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authController = new AuthenticateController()
const createComplimentController = new CreateComplimentController()
const listCompliments = new ListComplimentsController()
const listSentCompliments = new ListSendComplimentsController()
const listTags = new ListTagsController()
const listUsers = new ListUserController()

router.post('/users', createUserController.handle)
router.post('/tags', ensureAuth, ensureAdmin, createTagController.handle)
router.post('/login', authController.handle)
router.post('/compliments', ensureAuth, createComplimentController.handle)
router.get('/compliments/received', ensureAuth, listCompliments.handle)
router.get('/compliments/sent', ensureAuth, listSentCompliments.handle)
router.get('/tags', ensureAuth, ensureAdmin, listTags.handle)
router.get('/users', ensureAuth, ensureAdmin, listUsers.handle)

export { router }
