import Router from 'express'
import Post from './Post.js'

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

router.post('/posts', async (req, res) => {
    try {
        const { author, title, content, image } = req.body
        const post = await Post.create({ author, title, content, image })

        res.json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})

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
