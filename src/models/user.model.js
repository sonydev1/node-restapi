import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
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
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};
userSchema.methods.comparePassword = async (password, receivePassword) => {
    bcrypt.compare(password, receivePassword);
};

const User = model("Users", userSchema);

export default User;
