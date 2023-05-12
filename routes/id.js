import { Router } from "express"
import * as idCtrl from '../controllers/id.js'

const router = Router()

router.get('/',idCtrl.idSearch)

export { router }