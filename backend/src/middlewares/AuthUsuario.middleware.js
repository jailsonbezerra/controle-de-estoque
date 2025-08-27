import jwt from 'jsonwebtoken'


class AuthUsuarioMiddleware {
    async handle(req, res, next) {
        try {
            const { authorization } = req.headers

            if (!authorization) return res.status(401).json({ error: 'Token não passado.' })
            
            const [, token] = authorization.split(' ')

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //console.log(decoded)

            if (decoded.funcao.toLowerCase() !== 'admin'.toLowerCase()) return res.status(401).json({ error: 'Usuario não tem permissão.' })

            req.usuario = decoded

            return next()
        } catch (error) {
            return res.status(401).json({ error: 'Token invalido.' })
        }
    }
}

export default new AuthUsuarioMiddleware()