import { prisma } from './repository.js'


export class FornecedorRepository {
    async create(data) {
        return prisma.fornecedor.create({ data })
    }

    async findAll() {
        return prisma.fornecedor.findMany({
            include: {
                telefones: true
            }
        })
    }

    async findById(id) {
        return prisma.fornecedor.findUnique({ 
            where: { id }, 
            include: { 
                telefones: true 
            } 
        })
    }

    async update(id, data) {
        return prisma.fornecedor.update({ 
            where: { id }, 
            data 
        })
    }

    async delete(id) {
        return prisma.fornecedor.delete({ where: { id } })
    }
}

export default new FornecedorRepository()