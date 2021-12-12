import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { fetchUser } from '../../services/github-api'

const api = Router()
const prisma = new PrismaClient()

api.get('/:username', async (req, response) => {
  const { username } = req.params
  let user = await prisma.user.findUnique({ where: { login : username } })
  if (!user) {
    user = await fetchUser(username)
    if (user.message) {
      response.status(404).json({})
    } else {
      for(const field in user) {
        if(user[field] === null){
        }
      }
      try {
        await prisma.user.create({data : user})
      } catch {
        response.status(500).json({})
      }
    }
  } else {
    response.json({ data: { user } })
  }
})

export default api
