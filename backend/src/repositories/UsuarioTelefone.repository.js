import { prisma } from './repository.js'


class UsuarioTelefoneRepository {
    async create(data) {
        return prisma.usuarioTelefones.create({ data })
    }

    async findAll() {
        return prisma.usuarioTelefones.findMany({
            select: {
                id: true,
                ddd: true,
                numero: true,
                usuario: {
                    select: {
                        nome: true,
                        email: true
                    }
                }
            }
        })
    }

    async findById(id) {
        return prisma.usuarioTelefones.findUnique({ 
            where: { id }, 
            include: { 
                usuario: true 
            } 
        })
    }

    async update(id, data) {
        return prisma.usuarioTelefones.update({ where: { id }, data })
    }

    async delete(id) {
        return prisma.usuarioTelefones.delete({ where: { id } })
    }
}

export default new UsuarioTelefoneRepository()