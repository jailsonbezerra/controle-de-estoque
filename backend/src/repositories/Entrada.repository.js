import { prisma } from './repository.js'


class EntradaRepository {
    async create(data) {
        return prisma.entrada.create({ data })
    }

    async findAll() {
        return prisma.entrada.findMany({})
    }

    async findById(id) {
        return prisma.entrada.findUnique({ where: { id } })
    }

    async delete(id) {
        return prisma.entrada.delete({ where: { id } })
    }
    
    async update(id, data) {
        return prisma.entrada.update({ where: { id }, data })
    }
}

export default new EntradaRepository()