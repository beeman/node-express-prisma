import * as express from 'express'
import { Request, Response } from 'express'
import { loginRoute } from './routes/login.route'
import { meRoute } from './routes/me.route'
import { registerRoute } from './routes/register.route'

import { uptimeRoute } from './routes/uptime.route'
import { ServerConfig } from './server-config'

export async function server(config: ServerConfig) {
  // Set up Express server
  const app = express()
  app.use(express.json())

  // Authentication routes
  app.post('/login', loginRoute())
  app.get('/me', meRoute())
  app.post('/register', registerRoute())

  // Root Route, must be the last one.
  app.use('/uptime', uptimeRoute())
  app.use('*', (req: Request, res: Response) => res.status(404).send('Not Found'))

  // Start server
  app.listen(Number(config.port), '0.0.0.0').on('listening', async () => {
    console.log(`🚀 Listening on port ${config.port}`)
  })
}
