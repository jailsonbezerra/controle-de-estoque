import entradaRepository from '../repositories/Entrada.repository.js'


class EntradaService {
    async create(data) {
        return await entradaRepository.create(data)
    }

    async findAll() {
        return await entradaRepository.findAll()
    }

    async findById(id) {
        return await entradaRepository.findById(id)
    }

    async delete(id) {
        return await entradaRepository.delete(id)
    }
    
    async update(id, data) {
        return await entradaRepository.update(id, data)
    }
}

export default new EntradaService()