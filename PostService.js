import FileService from "./FileService.js"
import Post from "./Post.js"

class PostService {
    async create(post, image) {
        const fileName = await FileService.saveFile(image)
        const createdPost = await Post.create({ ...post, image: fileName })

        return createdPost
    }

    async getAll() {
        const posts = await Post.find()

        return posts
    }

    async getById(id) {
        if (!id) {
            throw new Error('No ID specified')
        }

        const post = await Post.findById(id)

        return post
    }

    async update(post) {
        if (!post._id) {
            throw new Error('No ID specified')
        }

        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })

        return updatedPost
    }

    async deleteById(id) {
        if (!id) {
            throw new Error('No ID specified')
        }

        const post = await Post.findByIdAndDelete(id)

        return post
    }


}

export default new PostService
