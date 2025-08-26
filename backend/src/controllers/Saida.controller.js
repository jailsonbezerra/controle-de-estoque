import saidaService from '../services/Saida.service.js'


class SaidaController {
    async create(req, res) {
        try {
            const saida = await saidaService.create(req.body)

            return res.status(201).json(saida)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async findAll(req, res) {
        try {
            const saida = await saidaService.findAll()

            return res.json(saida)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params

            const saida = await saidaService.findById(id)

            return res.json(saida)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    } 

    async update(req, res) {
        try {
            const { id } = req.params

            const saida = await saidaService.update(id, req.body)

            return res.status(200).json(saida)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params

            await saidaService.delete(id)

            return res.status(204).send()
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}

export default new SaidaController()