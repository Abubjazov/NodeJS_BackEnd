import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'

dotenv.config()

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
    const { author, title, content, image } = req.body
    const post = await Post.create({ author, title, content, image })

    res.status(200).json('Post created')
})

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(process.env.PORT, () => {
            console.log(`Server started on PORT: ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startApp()
