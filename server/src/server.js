import express from 'express'
import routes from './routes'
import cors from 'cors'

export async function launch(port = 4242) {
  const application = express()

  application.use(express.json())
  application.use(cors())

  /** Routes */
  application.use('/', routes)

  application.listen(port, () => {
    console.log(`API started at: http://localhost:${port}/api`)
  })
}
