import { Schema, model } from "mongoose"
import { User } from '../interfaces/user.interface'
const UserSchema = new Schema<User>(
  {
    name: {
      type: String
    },
    username: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    role: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

const UserModel = model("user", UserSchema)

export default UserModel
