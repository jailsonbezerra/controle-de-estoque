import { prisma } from './repository.js'


class UsuarioRepository {
    async create(data) {
        return prisma.usuario.create({ 
            data: {
                ...data,
                telefones: {
                    create: data.telefones
                }
            },
            include: { telefones: true }
        })
    }

    async findAll() {
        return prisma.usuario.findMany({
            include: {
                telefones: true
            }
        })
    }

    async findById(id) {
        return prisma.usuario.findUnique({ 
            where: { id }, 
            include: { 
                telefones: true 
            }
        })
    }

    async update(id, data) {
        return prisma.usuario.update({ 
            where: { id }, 
            data 
        })
    }

    async delete(id) {
        return prisma.usuario.delete({ where: { id } })
    }
}

export default new UsuarioRepository()