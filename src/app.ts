import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFoundRoute from './app/middlewares/notFoundRoute'
const app: Application = express()

// ! Parser
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Bike Rental Reservation System Backend Is Ruuning')
})

// *Global Error Handler
app.use(globalErrorHandler)

// * Not Found Route
app.use(notFoundRoute)

export default app
