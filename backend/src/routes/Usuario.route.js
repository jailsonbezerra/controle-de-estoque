import { Router } from 'express'

import usuarioController from '../controllers/Usuario.controller.js'

import authUsuarioMiddleware from '../middlewares/AuthUsuario.middleware.js'


class UsuarioRoute {
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        this.router.post('/usuarios', usuarioController.create)
        this.router.get('/usuarios', authUsuarioMiddleware.handle ,usuarioController.findAll)
        this.router.get('/usuarios/:id', authUsuarioMiddleware.handle, usuarioController.findById)
        this.router.put('/usuarios/:id', authUsuarioMiddleware.handle, usuarioController.update)
        this.router.delete('/usuarios/:id', authUsuarioMiddleware.handle, usuarioController.delete)
    }
}

export default new UsuarioRoute().router