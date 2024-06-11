import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

// ! Parser
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  const a = 10
  res.send('Helllo World' + a)
})

export default app
