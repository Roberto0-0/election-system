import { App } from "./app.js"
import { sequelize } from './database/index.js'
import "dotenv/config"

sequelize.authenticate().then(() => {
    new App().app.listen(process.env.PORT || 3333, () => console.log("Connected successfully!"))
}).catch((err) => { console.error(err) })
