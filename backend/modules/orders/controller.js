import Order from "../../models/Order.js"
import Productos from "../../models/Productos.js"

const getAllOrders =async(req,res)=>{
    try {
        const orders = await Order.find()
        if(!orders) return res.send({status: 400, message: "error", payload: "No se encontraron ordenes"})
        res.send({status: 200, message: "success", payload: orders})
    } catch (error) {
        res.send({status: 400, message: "error", payload: "No se encontraron ordenes"})
    }
}

const getOrderById = async (req,res) => {
    try {
        const id = req.params.id
        const order = await Order.findById(id)
        if(!order) return res.send({status: 400, message: "error", payload: "No se encontraron ordenes"})
        res.send({status: 200, message: "success", payload: orders})
    } catch (error) {
        res.send({status: 400, message: "error", payload: "No se encontro la orden"})
    }
}

const addOrder = async (req, res) => {
    try {
        const {nombre, apellido, telefono, email, productos} = req.body
        const product = Productos.findById(productos.producto)
        if(!product) return res.send({status: 400, message: "error", payload: "No se encontro el producto"})
        const newOrder = new Order({nombre, apellido, telefono, email, productos})
        await newOrder.save()
        return res.send({status: 200, message: "success", payload: newOrder})
    } catch (error) {
        console.log(error)
        res.send({status: 400, message: "error", payload: "Error al agregar el producto"})
    }
}

const updateOrder = async (req,res) => {
    try {
        const id = req.params.id
        const datos = req.body
        const order = await Order.findById(id)
        if(!order)  res.send({status: 400, message: "error", payload: "No se encontro la orden de compra"})
        const newOrder = await Order.findByIdAndUpdate({_id: id}, datos)
        return res.send({status: 200, message: "success", payload: newOrder})
    } catch (error) {
        res.send({status: 400, message: "error", payload: "Error al modificar la orden"})
    }
}

const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id
        const order = await Order.findById(id)
        if(!order)  res.send({status: 400, message: "error", payload: "No se encontro la orden de compra"})
        const orderDelete = await Order.findByIdAndDelete(id)
        return res.send({status: 200, message: "success", payload: orderDelete})
    } catch (error) {
        res.send({status: 400, message: "error", payload: "Error al eliminar la orden"})
    }
}

export {
    getAllOrders,
    getOrderById,
    addOrder,
    updateOrder,
    deleteOrder
}