import produtoRepository from '../repositories/Produto.repository.js'


class ProdutoService {
    async create(data) {
        return produtoRepository.create(data)
    }

    async findAll() {
        return produtoRepository.findAll()
    }

    async findById(id) {
        return produtoRepository.findById(id)
    }

    async update(id, data) {
        return produtoRepository.update(id, data)
    }

    async delete(id) {
        return produtoRepository.delete(id)
    }
}

export default new ProdutoService()