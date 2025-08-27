import express from 'express'
import cors from 'cors'

import usuarioRoutes from './routes/Usuario.route.js'
import usuarioTelefoneRoutes from './routes/UsuarioTelefone.route.js'
import categoriaRoute from './routes/Categoria.route.js'
import fornecedorRoute from './routes/Fornecedor.route.js'
import fornecedorTelefoneRoute from './routes/FornecedorTelefone.route.js'
import produtoRoute from './routes/Produto.route.js'
import entradaRoute from './routes/Entrada.route.js'
import saidaRoute from './routes/Saida.route.js'
import authUsuarioRoute from './routes/AuthUsuario.route.js'

import authUsuarioMiddleware from './middlewares/AuthUsuario.middleware.js'



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
        this.app.use('/api', authUsuarioRoute)
        this.app.use('/api/usuarios',authUsuarioMiddleware.handle, usuarioTelefoneRoutes)
        this.app.use('/api', usuarioRoutes)
        this.app.use('/api', categoriaRoute)
        this.app.use('/api/fornecedores',authUsuarioMiddleware.handle, fornecedorTelefoneRoute)
        this.app.use('/api',authUsuarioMiddleware.handle, fornecedorRoute)
        this.app.use('/api', produtoRoute)
        this.app.use('/api',authUsuarioMiddleware.handle, entradaRoute)
        this.app.use('/api',authUsuarioMiddleware.handle, saidaRoute)
    }
}

export default new App().app