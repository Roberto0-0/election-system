import multer from "multer"
import path from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, path.resolve(__dirname, "..", "..", "..", "tmp", "uploads")) },
  filename: (req, file, cb) => { cb(null, Date.now() + "_" + file.originalname) }
})
