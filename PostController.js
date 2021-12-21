import Post from "./Post.js"

class PostController {
    async create(req, res) {
        try {
            const { author, title, content, image } = req.body
            const post = await Post.create({ author, title, content, image })

            res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find()

            return res.json(posts)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getById(req, res) {
        try {

        } catch (error) {
            res.status(500).json(error)
        }
    }

    async updateById(req, res) {
        try {

        } catch (error) {
            res.status(500).json(error)
        }
    }

    async deleteById(req, res) {
        try {

        } catch (error) {
            res.status(500).json(error)
        }
    }

}

export default new PostController()