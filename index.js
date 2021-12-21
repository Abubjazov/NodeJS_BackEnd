import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json('Server at work 123')
})

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
})
