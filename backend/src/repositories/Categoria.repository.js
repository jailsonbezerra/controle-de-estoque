import { prisma } from './repository.js'


class Categoria {
    async create(data) {
        return prisma.categoria.create({ data })
    }

    async findAll() {
        return prisma.categoria.findMany()
    }

    async findById(id) {
        return prisma.categoria.findUnique({
            where: { id }
        })
    }

    async update(id, data) {
        return prisma.categoria.update({
            where: { id },
            data
        })
    }

    async delete(id) {
        return prisma.categoria.delete({where: { id }})
    }
}

export default new Categoria()