import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

// ! Parser
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Bike Rental Reservation System Backend Is Ruuning')
})

export default app
