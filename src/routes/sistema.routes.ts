import { Router } from 'express'
import controller from '../controllers/sistema.controller'
import ensureAuth from '../middlewares/auth.middleware'

const router = Router()

router.get('/', ensureAuth, controller.getSistema)
router.post('/', controller.createsistema_riego)

export default router
