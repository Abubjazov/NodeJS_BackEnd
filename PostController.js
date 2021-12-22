import PostService from "./PostService.js"

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.image)

            res.json(post)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()

            return res.json(posts)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async getById(req, res) {
        try {
            const post = await PostService.getById(req.params.id)

            return res.json(post)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body)

            return res.json(updatedPost)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async deleteById(req, res) {
        try {
            const post = await PostService.deleteById(req.params.id)

            return res.json(post)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

}

export default new PostController()
