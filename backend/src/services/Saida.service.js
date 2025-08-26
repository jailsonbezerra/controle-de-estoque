import saidaRepository from '../repositories/Saida.repository.js'


class SaidaService {
    async findAll() {
        return saidaRepository.findAll()
    }
    
    async create(data) {
        return saidaRepository.create(data)
    }

    async delete(id) {
        return saidaRepository.delete(id)
    }

    async findById(id) {
        return saidaRepository.findById(id)
    }

    async update(id, data) {
        return saidaRepository.update(id, data)
    }
}

export default new SaidaService()