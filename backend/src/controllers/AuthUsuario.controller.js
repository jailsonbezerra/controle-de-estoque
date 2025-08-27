import authUsuarioService from '../services/AuthUsuario.service.js'


class AuthUsuarioController {
    async login(req, res) {
        try {
            const { email, senha } = req.body

            const token = await authUsuarioService.login(email, senha)

            return res.status(200).json({ token: token })
        } catch (error) {
            if (error.message === 'Usuário ou senha incorretos.') return res.status(401).json({ error: error.message })
            
            return res.status(500).json({ error: error.message })
        }
    }
}

export default new AuthUsuarioController()