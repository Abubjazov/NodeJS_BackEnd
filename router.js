import Router from 'express'
import PostController from './PostController.js'

const router = new Router()

router.get('/posts', (req, res) => {
    try {

    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/posts/:id', (req, res) => {
    try {

    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/posts', PostController.create)

router.put('/posts/:id', (req, res) => {
    try {

    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/posts/:id', (req, res) => {
    try {

    } catch (error) {
        res.status(500).json(error)
    }
})

export default router
