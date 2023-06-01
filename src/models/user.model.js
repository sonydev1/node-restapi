import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.methods.encryPassword = async (password) => {
  const salt = 10
  return  bcrypt.hash(password, salt)
};

userSchema.method.comparePassword = async (password, receivePassword) => {
    bcrypt.compare(password, receivePassword);
};

const User = model("User", userSchema);

export default User;
