import { Router } from 'express'

import fornecedorController from '../controllers/Fornecedor.controller.js'


class FornecedorRoute {
    constructor() {
        this.router = Router()
        this.routes()
    }
    
    routes() {
        this.router.post('/fornecedores', fornecedorController.create)
        this.router.get('/fornecedores', fornecedorController.findAll)
        this.router.get('/fornecedores/:id', fornecedorController.findById)
        this.router.put('/fornecedores/:id', fornecedorController.update)
        this.router.delete('/fornecedores/:id', fornecedorController.delete)
    }
}

export default new FornecedorRoute().router