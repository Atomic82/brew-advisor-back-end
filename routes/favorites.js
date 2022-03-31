import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'

const router = Router()


/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, favoritesCtrl.create)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/:id', checkAuth, profilesCtrl.show)

export { router }