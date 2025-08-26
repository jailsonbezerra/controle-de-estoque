import { prisma } from './repository.js'


class FornecedorTelefoneRepository {
    async create(data) {
        return prisma.fornecedorTelefones.create({ data })
    }

    async findAll() {
        return prisma.fornecedorTelefones.findMany({
            select: {
                id: true,
                ddd: true,
                numero: true,
                fornecedor: {
                    select: {
                        nome: true,
                        email: true
                    }
                }
            }
        })
    }

    async findById(id) {
        return prisma.fornecedorTelefones.findUnique({ 
            where: { id }, 
            include: { 
                fornecedor: true 
            } 
        })
    }

    async update(id, data) {
        return prisma.fornecedorTelefones.update({ where: { id }, data })
    }

    async delete(id) {
        return prisma.fornecedorTelefones.delete({ where: { id } })
    }
}

export default new FornecedorTelefoneRepository()