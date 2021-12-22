import Post from "./Post.js"
import PostService from "./PostService.js"

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body)

            res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()

            return res.json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getById(req, res) {
        try {
            const post = await PostService.getById(req.params.id)

            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body)

            return res.json(updatedPost)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async deleteById(req, res) {
        try {
            const post = await PostService.deleteById(req.params.id)

            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

export default new PostController()
