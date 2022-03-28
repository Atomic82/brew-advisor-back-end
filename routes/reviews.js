import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as reviewsCtrl from '../controllers/reviews.js'


const router = Router()

/** ---------- Public Routes ---------- */
router.get('/', reviewsCtrl.index)

/** ---------- Protected Routes ---------- */



export { router }