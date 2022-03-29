import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as reviewsCtrl from '../controllers/reviews.js'


const router = Router()

/** ---------- Public Routes ---------- */

/** ---------- Protected Routes ---------- */
router.use(decodeUserFromToken)
router.post('/:id', checkAuth, reviewsCtrl.create)


export { router }