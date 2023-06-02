import { Schema, model } from 'mongoose'
const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    roles: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const User = model('User', userSchema)

export default User
