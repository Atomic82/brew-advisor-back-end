import { Router } from 'express'
import * as favoritesCtrl from '../controllers/favorites.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, favoritesCtrl.create)


export { router }