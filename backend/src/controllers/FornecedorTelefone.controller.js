import fornecedorTelefoneService from '../services/FornecedorTelefone.service.js'


class FornecedorTelefoneController {
    async create(req, res) {
        try {
            const telefone = await fornecedorTelefoneService.create(req.body)

            return res.status(201).json(telefone)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async findAll(req, res) {
        try {
          const telefones = await fornecedorTelefoneService.findAll()

          return res.status(200).json(telefones)
        } catch (error) {
          return res.status(500).json({ error: error.message })
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params

            const telefone = await fornecedorTelefoneService.findById(id)

            return res.status(200).json(telefone)
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

            const telefone = await fornecedorTelefoneService.update(id, req.body)

            return res.status(200).json(telefone)
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

            await fornecedorTelefoneService.delete(id)

            return res.status(204).send()
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message })
            }

            return res.status(500).json({ error: error.message })
        }
    }
}

export default new FornecedorTelefoneController()