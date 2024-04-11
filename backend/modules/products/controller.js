import Productos from "../../models/Productos.js"


const getAllProducts = async (req, res) => {
    try {
        const productos = await Productos.find()
        res.send({status: 200, message: "success", payload: productos})

    } catch (error) {
        res.send({status: 400, message: "error", payload: "productos no encontrados"})
    }
}

const getById = async (req,res)=>{
    try {
        const id = req.params.id
        const product = await Productos.findById(id) 
        if(!product) return res.send({status: "error", payload: "producto no encontrado"})
        res.send({status: 200, message: "success", payload: product})
    } catch (error) {
        res.send({status: 400, message: "error", payload: "producto no encontrado"})
    }
}

const addProduct = async (req, res) => {
    try {
        const {nombre, descripcion, precio, img} = req.body
        if(!nombre) return res.send({status: 400, message: "error", payload: "El nombre del producto es requerido"})
        const newProduct = new Productos({nombre, descripcion, precio, img})
        await newProduct.save()
        res.send({status: 200, message: "success", payload: newProduct})
    } catch (error) {
        res.send({status: 400, message: "error", payload: "Error al agregar el producto"})
    }
}

const editProduct =async (req,res)=>{
    try {
        const datos = req.body
        const id = req.params.id
        const editProduct = await Productos.findByIdAndUpdate(id, datos)
        res.send({status: 200, message: "success", payload: editProduct})
    } catch (error) {
        res.send({status: 400, message: "error", payload: "Error al editar el producto"})
    }
}

const deleteProducto =async (req,res)=>{
    try {
        const id = req.params.id
        const deletedProduct = await Productos.findByIdAndDelete(id)
        res.send({status: 200, message: "success", payload: deletedProduct})
    } catch (error) {
        res.send({status: 400, message: "error", payload: "Error al eliminar el producto"})
    }
}

export {
    getAllProducts,
    addProduct,
    editProduct,
    deleteProducto,
    getById
}