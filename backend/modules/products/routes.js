import { Router } from "express";
import { addProduct, deleteProducto, editProduct, getAllProducts, getById } from "./controller.js";


const routerProductos = Router()

routerProductos.get('/productos', getAllProducts)
routerProductos.get('/productos/:id', getById)
routerProductos.post('/productos', addProduct)
routerProductos.put('/productos/:id', editProduct)
routerProductos.delete('/productos/:id', deleteProducto)

export default routerProductos