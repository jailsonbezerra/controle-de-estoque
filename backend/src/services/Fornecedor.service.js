import fornecedorRepository from '../repositories/Fornecedor.repository.js'


class FornecedorService {
    async create(data) {
        return fornecedorRepository.create(data)
    }

    async findAll() {
        return fornecedorRepository.findAll()
    }

    async findById(id) {
        return fornecedorRepository.findById(id)
    }

    async update(id, data) {
        return fornecedorRepository.update(id, data)
    }
    
    async delete(id) {
        return fornecedorRepository.delete(id)
    }
}

export default new FornecedorService()