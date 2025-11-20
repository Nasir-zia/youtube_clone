import express from express
import cors from cors
import cookiesParser from cookies-parser



const app = express()
app.use(cors({
    origin: "Process.env.CORS_ORIGN",

}
))

app.use(express.json({limit : "16kb"}))
app.use(cookiesParser())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))






export default app