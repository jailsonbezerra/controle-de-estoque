import categoriaService from '../services/Categoria.service.js'


class CategoriaController {
    async create(req, res) {
        try {
            const categoria = await categoriaService.create(req.body)

            return res.status(201).json(categoria)
        } catch (error) {
            if (error.message === 'Categoria não encontrada.') return res.status(409).json({ error: error.message })
            
            return res.status(500).json({ error: error.message })
        }
    }

    async findAll(req, res) {
        try {
            const categorias = await categoriaService.findAll()

            return res.status(200).json(categorias)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params

            const categoria = await categoriaService.findById(id)

            if (!categoria) return res.status(404).json({ error: 'Categoria não encontrada' })
            
            return res.status(200).json(categoria)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params

            const categoria = await categoriaService.update(id, req.body)

            return res.status(200).json(categoria)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params

            await categoriaService.delete(id)

            res.status(204).send()
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}

export default new CategoriaController()