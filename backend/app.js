import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import conectarDB from './config/db.js'
import router from './api/routes.js'

conectarDB()
dotenv.config({path: ".env"})
const app = express()
app.use(cors())
app.use(express.json())
const apiUrl = process.env.API_URL
app.use(`${apiUrl}/`, router)

app.get(apiUrl+'/', (req, res)=>{
    res.send("Api tienda online")
})

app.listen(3010, ()=>{
    console.log("Escuchando al servidor en http://localhost:3010");
})