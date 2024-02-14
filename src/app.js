import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { main } from './db/connection.js'
const app = express()

const PORT = process.env.PORT

app.use(cors())

app.use(express.json())

// Connect Db
main()
