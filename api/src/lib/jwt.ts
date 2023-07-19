import * as jwt from 'jsonwebtoken'
import { User } from '@prisma/client'
export function generateAccessToken(user: User) {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string)
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; email: string }
}
