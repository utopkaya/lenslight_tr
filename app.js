import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js"

dotenv.config()

// database connection
conn()

const app = express()
const port = process.env.PORT

/* ejs template engine */
app.set("view engine", "ejs")

/* static files middlewares */
app.use(express.static("public"))

// routes
app.use("/", pageRoute)

app.listen(port, ()=>{
    console.log(`application running on ${port} port`)
})

