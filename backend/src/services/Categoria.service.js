import categoriaRepository from '../repositories/Categoria.repository.js'


class CategoriaService {
    async create(data) {
        try {
            return await categoriaRepository.create(data)
        } catch (error) {
            if (error.code === 'P2002') {
                throw new Error('Essa categoria já existe.')
            }

            throw error
        }
    }

    async findAll() {
        return await categoriaRepository.findAll()
    }

    async findById(id) {
        const categoria = await categoriaRepository.findById(id)

        if (!categoria) throw new Error('Categoria não encontrada.')

        return categoria
    }

    async update(id, data) {
        await this.findById(id)

        return categoriaRepository.update(id, data)
    }

    async delete(id) {
        await this.findById(id)

        return categoriaRepository.delete(id)
    }
}

export default new CategoriaService()