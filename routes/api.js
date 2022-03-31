import { Router } from "express";
import * as apiCtrl from '../controllers/api.js'

const router = Router()

/*---------- Public Routes ----------*/
router.post('/single', apiCtrl.getSingleBrewery)
router.post('/all', apiCtrl.getBreweries)


export { router }