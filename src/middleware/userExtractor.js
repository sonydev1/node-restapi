import jwt from 'jsonwebtoken'
import { SECRET } from '../config.js'

export default async (req, res, next) => {
  try {
    const authorization = req.get('authorization')
    let token = null
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7)
    }

    const descodedToken = await jwt.verify(token, `${SECRET}`)

    const id = descodedToken.id
    req.userId = id

    next()
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'token missing or invalid' })
    } else {
      res.json(error)
    }
  }
}
