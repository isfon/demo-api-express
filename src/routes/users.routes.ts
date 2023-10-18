import { Router } from 'express'
import controller from '../controllers/users.controller'
import ensureAuth from '../middlewares/auth.middleware'

const router = Router()

router.get('/', ensureAuth, controller.getUsers)
router.post('/', controller.createUser)
router.post('/auth/login', controller.login)

export default router
