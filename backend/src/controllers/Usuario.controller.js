import usuarioService from '../services/Usuario.service.js'
import { NotFoundError } from '../services/Usuario.service.js'


class UsuarioController {
    async create(req, res) {
        try {
            const usuario = await usuarioService.create(req.body)

            return res.status(201).json(usuario)
        } catch (error) {
            if (error.message === 'Este e-mail já está em uso.') {
                return res.status(409).json({ error: error.message })
            }

            return res.status(500).json({ error: error.message })
        }
    }

    async findAll(req, res) {
        try {
          const usuarios = await usuarioService.findAll()

          return res.status(200).json(usuarios)
        } catch (error) {
          return res.status(500).json({ error: error.message })
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params

            const usuario = await usuarioService.findById(id)

            if (usuario) {
                return res.status(200).json(usuario)
            } else {
                return res.status(404).json({ error: 'Usuário não encontrado' })
            }
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message })
            }

            return res.status(500).json({ error: error.message })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params

            const usuario = await usuarioService.update(id, req.body)

            return res.status(200).json(usuario)
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message })
            }

            return res.status(500).json({ error: error.message })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params

            await usuarioService.delete(id)

            return res.status(204).send()
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message })
            }
        
            return res.status(500).json({ error: error.message })
        }
    }
}

export default new UsuarioController()