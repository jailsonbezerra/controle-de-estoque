import { Router } from 'express'

import usuarioController from '../controllers/Usuario.controller.js'

class UsuarioRoute {
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        this.router.post('/usuarios', usuarioController.create)
        this.router.get('/usuarios', usuarioController.findAll)
        this.router.get('/usuarios/:id', usuarioController.findById)
        this.router.put('/usuarios/:id', usuarioController.update)
        this.router.delete('/usuarios/:id', usuarioController.delete)
    }
}

export default new UsuarioRoute().router