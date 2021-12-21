import Router from 'express'
import PostController from './PostController.js'

const router = new Router()

router.get('/posts', PostController.getAll)

router.get('/posts/:id', PostController.getById)

router.post('/posts', PostController.create)

router.put('/posts/:id', PostController.updateById)

router.delete('/posts/:id', PostController.deleteById)

export default router
