import { Router } from 'express'

import usuarioTelefoneController from '../controllers/UsuarioTelefone.controller.js'


class UsuarioTelefoneRoute {
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        this.router.post('/telefones', usuarioTelefoneController.create)
        this.router.get('/telefones', usuarioTelefoneController.findAll)
        this.router.get('/telefones/:id', usuarioTelefoneController.findById)
        this.router.put('/telefones/:id', usuarioTelefoneController.update)
        this.router.delete('/telefones/:id', usuarioTelefoneController.delete)
    }
}

export default new UsuarioTelefoneRoute().router