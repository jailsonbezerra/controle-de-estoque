import { Router } from 'express'

import categoriaController from '../controllers/Categoria.controller.js'


class CategoriaRoute {
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        this.router.post('/categorias', categoriaController.create)
        this.router.get('/categorias', categoriaController.findAll)
        this.router.get('/categorias', categoriaController.findById)
        this.router.put('/categorias', categoriaController.update)
        this.router.delete('/categorias', categoriaController.delete)
    }
}

export default new CategoriaRoute().router