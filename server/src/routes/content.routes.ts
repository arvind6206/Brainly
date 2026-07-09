import {Router} from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { createContent } from '../controllers/content.controller.js'

const contentRouter = Router()

contentRouter.post('/create', authMiddleware, createContent)




export default contentRouter