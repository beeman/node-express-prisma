import { Request, Response } from 'express'
import { prisma } from '../../lib'
import { verifyAccessToken } from '../../lib/jwt'

export function meRoute() {
  return async (req: Request, res: Response) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    try {
      const valid = verifyAccessToken(token)

      if (!valid || !valid.email) {
        res.status(400)
        return res.send({ error: 'Invalid email or password' })
      }

      const found = await prisma.user.findUnique({
        where: { email: valid.email },
        select: { email: true, id: true, createdAt: true, updatedAt: true },
      })

      if (!found) {
        res.status(400)
        return res.send({ error: 'Invalid email or password' })
      }

      return res.send(found)
    } catch (error) {
      res.status(400)
      return res.send({ error: `${error}` })
    }
  }
}
