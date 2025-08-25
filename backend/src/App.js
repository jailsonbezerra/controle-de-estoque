import express from 'express'
import cors from 'cors'

import usuarioRoutes from './routes/Usuario.route.js'
import usuarioTelefoneRoutes from './routes/UsuarioTelefone.route.js'
import categoriaRoute from './routes/Categoria.route.js'  


class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    routes() {
        this.app.use('/api', usuarioRoutes)
        this.app.use('/api', usuarioTelefoneRoutes)
        this.app.use('/api', categoriaRoute)
    }
}

export default new App().app