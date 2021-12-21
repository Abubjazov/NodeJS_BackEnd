import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json('Server at work')
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
