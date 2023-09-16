import multer from "multer"
import { storage } from "../../services/Multer/fileConfig.js"

export class Multer {
  constrcutor() {
    this.uplaod = multer({ storage: storage })
  }
}
