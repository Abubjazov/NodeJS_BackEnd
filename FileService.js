import * as path from 'path'
import { nanoid } from "nanoid"

class FileService {
    async saveFile(file) {
        try {
            const fileName = nanoid() + '.jpg'
            const filePath = path.resolve('static', fileName)

            file.mv(filePath)

            return fileName
        } catch (error) {
            console.log(error)
        }
    }
}

export default new FileService()
