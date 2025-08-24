import { Prisma } from '@prisma/client'
import usuarioRepository from '../repositories/Usuario.repository.js'
import bcrypt from 'bcrypt'

export class NotFoundError extends Error {
    constructor(message) {
        super(message)
        this.name = 'NotFoundError'
    }
}

class UsuarioService {
    async create(data) {
        const hashedPassword = await bcrypt.hash(data.senha, 10)
        const newData = { ...data, senha: hashedPassword }

        try {
            return await usuarioRepository.create(newData)
        } catch (error) {
                if (error.code === 'P2002') {
                throw new Error('Este e-mail já está em uso.')
            }

            throw error
        }
    }

    async findAll() {
        return usuarioRepository.findAll()
    }

    async findById(id) {
        const usuario = await usuarioRepository.findById(id)

        if (!usuario) {
          throw new NotFoundError('Usuário não encontrado.')
        }

        return usuario
    }

    async update(id, data) {
        await this.findById(id)

        if (data.senha) {
            data.senha = await bcrypt.hash(data.senha, 10)
        }

        return usuarioRepository.update(id, data)
    }

    async delete(id) {
        await this.findById(id)

        return usuarioRepository.delete(id)
    }
}

export default new UsuarioService()