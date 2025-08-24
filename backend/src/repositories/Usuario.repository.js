import { prisma } from './repository.js'



class UsuarioRepository {
    async create(data) {
        return prisma.usuario.create({ data })
    }

    async findAll() {
        return prisma.usuario.findMany()
    }

    async findById(id) {
        return prisma.usuario.findUnique({ where: { id } })
    }

    async update(id, data) {
        return prisma.usuario.update({ where: { id }, data })
    }

    async delete(id) {
        return prisma.usuario.delete({ where: { id } })
    }
}

export default new UsuarioRepository()