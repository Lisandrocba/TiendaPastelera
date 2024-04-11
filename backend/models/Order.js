import mongoose from "mongoose";

const ProdSchema = mongoose.Schema({
    producto: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Productos'
    },
    quantity: {
        type: Number,
        default: 1
    }
}, { _id: false });

const OrderSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    productos: [ProdSchema],
    creado:{
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('Ordenes', OrderSchema)