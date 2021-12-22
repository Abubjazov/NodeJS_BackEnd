import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import router from './router.js'


dotenv.config()

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

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
