import { Schema, model } from 'mongoose'

const roleSchema = new Schema({
  name: String

}, {
  timestamps: true,
  versionKey: false
})

const Role = model('Role', roleSchema)

export default Role
