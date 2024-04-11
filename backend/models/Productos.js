import mongoose from "mongoose";

const ProductosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
    creado:{
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('Productos', ProductosSchema)