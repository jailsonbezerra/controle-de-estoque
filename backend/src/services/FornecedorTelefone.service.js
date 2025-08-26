import fornecedorTelefoneRepository from '../repositories/FornecedorTelefone.repository.js'


class FornecedorTelefoneService {
    async create(data) {
        try {
            return await fornecedorTelefoneRepository.create(data)
        } catch (error) {
            throw error
        }
    }

    async findAll() {
        return fornecedorTelefoneRepository.findAll()
    }

    async findById(id) {
        const telefone = await fornecedorTelefoneRepository.findById(id)

        if (!telefone) {
          throw new NotFoundError('Telefone não encontrado.')
        }

        return telefone
    }

    async update(id, data) {
        await this.findById(id)

        return fornecedorTelefoneRepository.update(id, data)
    }

    async delete(id) {
        await this.findById(id)

        return fornecedorTelefoneRepository.delete(id)
    }
}

export default new FornecedorTelefoneService()