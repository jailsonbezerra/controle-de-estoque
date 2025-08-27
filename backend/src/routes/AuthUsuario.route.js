import { Router } from 'express'

import authUsuarioController from '../controllers/AuthUsuario.controller.js'


class AuthUsuarioRoute {
    constructor() {
        this.router = Router()
        this.routes()
    }

    routes() {
        this.router.post('/login', authUsuarioController.login)
    }
}

export default new AuthUsuarioRoute().router