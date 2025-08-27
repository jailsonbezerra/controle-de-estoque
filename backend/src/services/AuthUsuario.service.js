import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import usuarioRepository from '../repositories/Usuario.repository.js'


class AuthUsuarioService {
    async login(email, senha) {
        const usuario = await usuarioRepository.findByEmail(email)

        if (!usuario) throw new Error('Usuário ou senha incorretos.')

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

        if (!senhaCorreta) throw new Error('Usuário ou senha incorretos.')

        const token = jwt.sign({ id: usuario.id, email: usuario.email,  funcao: usuario.funcao}, process.env.JWT_SECRET)

        return token
    }
}

export default new AuthUsuarioService()