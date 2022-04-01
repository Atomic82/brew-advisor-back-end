import { Router } from "express"
import * as eventsCtrl from '../controllers/events.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:id', eventsCtrl.show)
router.get('/', eventsCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, eventsCtrl.create)
router.put('/:id', checkAuth, eventsCtrl.update)
router.delete('/:id', checkAuth, eventsCtrl.delete)
router.post('/addComment', checkAuth, eventsCtrl.addComment)

export {
  router
}