import {Router} from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { createContent, getContent, deleteContent } from '../controllers/content.controller.js'

const contentRouter = Router()

contentRouter.post('/content', authMiddleware, createContent)
contentRouter.get('/content', authMiddleware, getContent)
contentRouter.delete('/content', authMiddleware, deleteContent)






export default contentRouter