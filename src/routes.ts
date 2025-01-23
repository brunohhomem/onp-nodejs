import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({ teste: 'teste' })
})

router.post('/painel/pijama', (req: Request, res: Response) => {
  console.log(req.body)
  const { nome, tamanho, cor, preco, quantidade_estoque } = req.body

  res.json({ nome, tamanho, cor, preco, quantidade_estoque })
})

export default router
