import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config({path: ".env"})

const conectarDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_MONGO,{
           
        })
        console.log('DB Conectada')
    } catch (error) {
        console.log('No se pudo conectar a la base de datos')
        console.log(error)
        process.exit(1)
    }
}

export default conectarDB