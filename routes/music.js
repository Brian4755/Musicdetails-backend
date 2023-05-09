import { Router } from "express"
import * as musicCtrl from '../controllers/music.js'

const router = Router()

router.get('/',musicCtrl.musicSearch)

export { router }