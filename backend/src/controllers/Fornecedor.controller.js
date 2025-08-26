import fornecedorService from '../services/Fornecedor.service.js'


class FornecedorController {
    async create(req, res) {
        try {
            const fornecedor = await fornecedorService.create(req.body)

            return res.status(201).json(fornecedor)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async findAll(req, res) {
        try {
            const fornecedores = await fornecedorService.findAll()

            return res.status(200).json(fornecedores)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params

            const fornecedor = await fornecedorService.findById(id)

            return res.status(200).json(fornecedor)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params

            const fornecedor = await fornecedorService.update(id, req.body)

            return res.status(200).json(fornecedor)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params

            await fornecedorService.delete(id)

            return res.status(204).send()
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}

export default new FornecedorController()