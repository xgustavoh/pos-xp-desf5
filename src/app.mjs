import 'dotenv/config'
import express from 'express'
import productsRouter from './routers/productsRouter.mjs'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/products', productsRouter)

app.listen(port, () => console.log(`Run port: http://localhost:${port}/`))