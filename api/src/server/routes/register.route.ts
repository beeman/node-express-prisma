import { hash } from 'bcryptjs'
import { Request, Response } from 'express'
import { prisma } from '../../lib'
import { generateAccessToken } from '../../lib/jwt'

export function registerRoute() {
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

    const hashedPassword = await hash(input.password, 10)

    try {
      const created = await prisma.user.create({
        data: {
          email: input.email,
          password: hashedPassword,
        },
      })
      const token = generateAccessToken(created)
      created.password = undefined
      return res.send({ user: created, token })
    } catch (error) {
      res.status(400)
      return res.send({ error: `${error}` })
    }
  }
}
