import { useState } from 'react'


export default function FormularioLogin() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [resposta, setResposta] = useState(false) 

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            })

            const data = await response.json()

            if (response.ok && data.token) {
                setResposta(true)
                sessionStorage.setItem('token', data.token) 
            } else {
                setResposta(false)
                alert("Usuário ou senha inválidos")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="E-mail"
                />
                <input
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    type="password"
                    placeholder="Senha"
                />
                <button type="submit">Entrar</button>
            </form>

            {resposta && <p>Logado com sucesso!</p>}
        </>
    )
}
