import { Router } from 'express'

import produtoController from '../controllers/Produto.controller.js'


class ProdutoRoute {
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        this.router.post('/produtos', produtoController.create)
        this.router.get('/produtos', produtoController.findAll)
        this.router.get('/produtos/:id', produtoController.findById)
        this.router.put('/produtos/:id', produtoController.update)
        this.router.delete('/produtos/:id', produtoController.delete)
    }
}

export default new ProdutoRoute().router