import { prisma } from './repository.js'


class SaidaRepository {
    async findAll() {
        return prisma.saida.findMany({})
    }

    async create(data) {
        return prisma.saida.create({ data })
    }

    async delete(id) {
        return prisma.saida.delete({ where: { id } })
    }

    async findById(id) {
        return prisma.saida.findUnique({ where: { id } })
    }
    
    async update(id, data) {
        return prisma.saida.update({ where: { id }, data })
    }
}

export default new SaidaRepository()