import app from './App.js'

import 'dotenv/config'


const porta = process.env.PORT || 3000

app.listen(porta, () => {
    console.log(`Server is running on port ${porta}`)
})