import { Router } from 'express'

import entradaController from '../controllers/Entrada.controller.js'


class EntradaRoute {
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        this.router.post('/entradas', entradaController.create)
        this.router.get('/entradas', entradaController.findAll)
        this.router.get('/entradas/:id', entradaController.findById)
        this.router.put('/entradas/:id', entradaController.update)
        this.router.delete('/entradas/:id', entradaController.delete)
    }
}

export default new EntradaRoute().router