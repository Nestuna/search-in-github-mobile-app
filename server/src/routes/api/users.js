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
    }
    for(const field in user) {
      if(user[field] === null){
        user[field] = ''
      }
    }
    await prisma.user.create({data : user})
  }
  response.json({ data: { user } })
})

export default api
