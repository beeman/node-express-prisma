import { Request, Response } from 'express'
import { compare } from 'bcryptjs'
import { prisma } from '../../lib'

export function loginRoute() {
  return async (req: Request, res: Response) => {
    const input: { email: string; password: string } = req.body

    if (!input.email) {
      res.status(400)
      return res.send({ error: 'Missing email' })
    }
    if (!input.password) {
      res.status(400)
      return res.send({ error: 'Missing password' })
    }

    const found = await prisma.user.findUnique({
      where: { email: input.email },
    })

    if (!found) {
      res.status(400)
      return res.send({ error: 'Invalid email or password' })
    }

    const valid = await compare(input.password, found.password)

    if (!valid) {
      res.status(400)
      return res.send({ error: 'Invalid email or password' })
    }

    return res.send({ message: 'Logged in' })
  }
}
