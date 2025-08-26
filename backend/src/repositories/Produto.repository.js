import { prisma } from './repository.js'


class ProdutoRepository {
    async create(data) {
        return prisma.produto.create({ data })
    }

    async findAll() {
        return prisma.produto.findMany({})
    }

    async findById(id) {
        return prisma.produto.findUnique({ where: { id } })
    }

    async update(id, data) {
        return prisma.produto.update({ where: { id }, data })
    }

    async delete(id) {
        return prisma.produto.delete({ where: { id } })
    }
}

export default new ProdutoRepository()