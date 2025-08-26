import produtoService from '../services/Produto.service.js'


class ProdutoController {
    async create(req, res) {
        try {
            const produto = await produtoService.create(req.body)

            return res.status(201).json(produto)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async findAll(req, res) {
        try {
            const produtos = await produtoService.findAll()

            return res.status(200).json(produtos)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params

            const produto = await produtoService.findById(id)

            return res.status(200).json(produto)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params

            const produto = await produtoService.update(id, req.body)

            return res.status(200).json(produto)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params

            await produtoService.delete(id)

            return res.status(204).send()
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}

export default new ProdutoController()