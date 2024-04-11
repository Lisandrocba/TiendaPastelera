import { Router } from "express";
import { addOrder, deleteOrder, getAllOrders, getOrderById, updateOrder } from "./controller.js";

const routerOrders = Router()

routerOrders.get('/ordenes', getAllOrders)
routerOrders.get('/ordenes/:id', getOrderById)
routerOrders.post('/ordenes', addOrder)
routerOrders.put('/ordenes/:id', updateOrder)
routerOrders.delete('/ordenes/:id', deleteOrder)

export default routerOrders