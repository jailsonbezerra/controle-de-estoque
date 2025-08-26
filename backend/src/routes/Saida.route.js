import { Router } from 'express'

import saidaController from '../controllers/Saida.controller.js'


class SaidaRoute {
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        this.router.post('/saidas', saidaController.create)
        this.router.get('/saidas', saidaController.findAll)
        this.router.get('/saidas/:id', saidaController.findById)
        this.router.put('/saidas/:id', saidaController.update)
        this.router.delete('/saidas/:id', saidaController.delete)
    }
}

export default new SaidaRoute().router