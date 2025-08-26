import { Router } from 'express'

import fornecedorTelefoneController from '../controllers/FornecedorTelefone.controller.js'


class FornecedorTelefoneRoute {
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        this.router.post('/telefones', fornecedorTelefoneController.create)
        this.router.get('/telefones', fornecedorTelefoneController.findAll)
        this.router.get('/telefones/:id', fornecedorTelefoneController.findById)
        this.router.put('/telefones/:id', fornecedorTelefoneController.update)
        this.router.delete('/telefones/:id', fornecedorTelefoneController.delete)
    }
}

export default new FornecedorTelefoneRoute().router