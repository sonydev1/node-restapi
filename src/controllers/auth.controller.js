import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET } from '../config.js'

async function Login (req, res) {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    const passwordCorrect =
      user !== null ? await bcrypt.compare(password, user.password) : false

    if (passwordCorrect !== false) {
      const userForToken = {
        id: user._id,
        email: user.email
      }
      const token = jwt.sign(userForToken, `${SECRET}`)

      res.json({
        message: 'login Success',
        body: [{ name: user.name, email: user.email, token }]
      })
    } else {
      res.status(401).json({ error: 'invalid user or password' })
    }
  } catch (error) {
    res.json(error)
  }
}

async function Signup (req, res) {
  try {
    const { name, email, password } = req.body

    const passwordHash = await bcrypt.hash(password, 10)

    const user = await User.findOne({ email })
    if (user !== null) {
      res.json({ error: 'This email already exists' })
    } else {
      const newUSer = await User.create({
        name,
        email,
        password: passwordHash
      })

      res.json({
        message: 'Signup Success',
        body: [newUSer.name, newUSer.email]
      })
    }
  } catch (error) {
    res.json(error)
  }
}

export { Login, Signup }
