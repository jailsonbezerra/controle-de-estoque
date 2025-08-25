import usuarioTelefoneRepository from '../repositories/UsuarioTelefone.repository.js'


class UsuarioTelefoneService {
    async create(data) {
        try {
            return await usuarioTelefoneRepository.create(data)
        } catch (error) {
            throw error
        }
    }

    async findAll() {
        return usuarioTelefoneRepository.findAll()
    }

    async findById(id) {
        const telefone = await usuarioTelefoneRepository.findById(id)

        if (!telefone) {
          throw new NotFoundError('Telefone não encontrado.')
        }

        return telefone
    }

    async update(id, data) {
        await this.findById(id)

        return usuarioTelefoneRepository.update(id, data)
    }

    async delete(id) {
        await this.findById(id)

        return usuarioTelefoneRepository.delete(id)
    }
}

export default new UsuarioTelefoneService()