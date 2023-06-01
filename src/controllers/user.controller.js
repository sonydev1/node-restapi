import User from "../models/user.model.js";
import  bcrypt  from 'bcrypt';



async function Login(req, res) {
    try {
      const { username, email, password } = req.body;
      const salt = 10;
      const passwordHash = await bcrypt.hash(password, salt);
      await User.create({
        username,
        email,
        password: passwordHash,
      });
  
      res.json({ message: "login Success" });
    } catch (error) {
      res.json(error);
    }
  }