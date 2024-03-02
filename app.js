import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.static(
    "public"
))

//router import
import questionRouter from './routes/question.routes.js'
import optionRouter from './routes/option.routes.js'

//routes declaration
app.use("/api/v1/questions", questionRouter)
app.use("/api/v1/options", optionRouter)
// http://localhost:8000/api/v1/users/register

export {app}
