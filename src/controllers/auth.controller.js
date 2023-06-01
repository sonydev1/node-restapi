import User from "../models/user.model.js";
import bcrypt from "bcrypt";

async function Login(req, res) {
  try {
    const {  email, password } = req.body;
  
    const newUSer =  await User.create({
      username,
      email,
      password: passwordHash,
    });
    res.json("login Success");
  } catch (error) {
    res.json(error);
  }
}

async function Signup(req, res) {


  try {
    const { username, email, password } = req.body;
    
    const passwordHash = await bcrypt.hash(password, 10); 
    const newUSer =  await User.create({
      username,
      email,
      password: passwordHash,
    });

    res.json({ message: "Signup Success" });
  } catch (error) {
    res.json(error);
  }
}

export { Login, Signup };
