import express, { Request, Response } from 'express'

const server = express()

server.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Funcionou!' })
})

server.listen(3000)
