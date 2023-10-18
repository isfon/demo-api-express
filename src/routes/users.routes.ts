import { Router } from 'express'
import controller from '../controllers/users.controller'

const router = Router()

router.get('/', controller.getUsers)
router.post('/', controller.createUser)

export default router
