import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { fetchUser } from '../../../services/github-api'

const api = Router()
const prisma = new PrismaClient()

/** GET /api/users > Retrieve all users */
api.get('/:username', async (req, response) => {
  const { username } = req.params
  let user = await prisma.user.findUnique({ where: { login : username } })
  if (!user) {
    user = await fetchUser(username)
    for(const field in user) {
      if(user[field] === null){
        user[field] = ''
      }
    }
    await prisma.user.create({data : user})
  }
  response.json({ data: { user } })
})

/** POST /api/users > Create an user */
api.post('/:username', async (request, response) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email: request.body.email,
        username: request.body.username
      }
    })
    return response.json({data: {message: `User ${newUser.email} created`}})
  } catch(e) {
    console.error(`Failed to create user : ${e}`)
    return response.json({data: {message: 'Failed to create user'}})
  }
})

api.delete('/:username', async (request, response) => {
  const { id  } = request.params
  try {
    await prisma.user.delete({
      where: { id: parseInt(id) }
    })
    return response.json({data : {message: `user ${id} deleted`}})
  } catch(e) {
    console.error(`Failed user ${id}`)
    return response.json({data: {message: `user ${id} deleted`}})
  }
})

export default api
