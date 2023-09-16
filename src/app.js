import express from "express"
import bodyParser from "body-parser"
import session from "express-session"
import flash from "express-flash"
import ejs from "ejs"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
import { AppRoutes } from "./routes/index.js"
import { sequelize } from "./database/index.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export class App {
  constructor() {
    this.app = express()
    this.sequelizeSync = sequelize
    
    this.middlewares()
    this.routes()
  }
  
  middlewares() {
    this.app.use(session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true,
      cookie: { maxAge: 60000 }
    }))
    this.app.use(flash())

    this.sequelizeSync.sync()

    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json())
    
    this.app.use(express.static(path.join(__dirname, "public")))
    this.app.use(express.static(path.resolve(__dirname, "..", "tmp", "uploads")))
    this.app.set("views", path.join(__dirname, "views"))
    this.app.engine("ejs", ejs.renderFile)
    this.app.set("views engine", "ejs")
  }
  
  routes() { this.app.use(new AppRoutes().router) }
}
