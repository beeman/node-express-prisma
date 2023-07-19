export interface ServerConfig {
  apiUrl: string
  host: string
  port: string
}

export function getServerConfig(): ServerConfig {
  const requiredEnvVars = ['JWT_SECRET', 'PORT']
  const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]?.length)

  if (missingEnvVars.length > 0) {
    console.error(`Missing environment variables: ${missingEnvVars.join(', ')}`)
    process.exit(1)
  }

  const host = process.env.HOST || 'localhost'
  const port = process.env.PORT || '9876'

  const apiUrl = process.env.API_URL || `http://${host}:${port}`

  return {
    apiUrl,
    host,
    port,
  }
}
