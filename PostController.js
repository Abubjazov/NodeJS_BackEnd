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
}

export default new PostController()
