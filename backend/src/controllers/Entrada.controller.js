import entradaService from '../services/Entrada.service.js'


class EntradaController {
    async create(req, res) {
        try {
            const entrada = await entradaService.create(req.body)

            return res.status(201).json(entrada)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async findAll(req, res) {
        try {
            const entradas = await entradaService.findAll()

            return res.status(200).json(entradas)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params

            const entrada = await entradaService.findById(id)

            return res.status(200).json(entrada)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params

            const entrada = await entradaService.update(id, req.body)

            return res.status(200).json(entrada)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params

            await entradaService.delete(id)

            return res.status(204).send()
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}

export default new EntradaController()