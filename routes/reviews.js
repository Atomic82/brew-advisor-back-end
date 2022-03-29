import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as reviewsCtrl from '../controllers/reviews.js'


const router = Router()

/** ---------- Public Routes ---------- */
router.post('/', reviewsCtrl.create)

/** ---------- Protected Routes ---------- */
router.use(decodeUserFromToken)


export { router }