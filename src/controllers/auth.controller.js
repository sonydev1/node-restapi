import User from "../models/user.model.js";

async function Login(req, res) {
  try {
    const { username, email, password, role } = req.body;

    const createUser = await User({
      username,
      email,
      password: User.encryPassword(password),
      role,
    });
     

    console.log(createUser );
    res.json({ message: "login Success" });
  } catch (error) {
    res.json(error);
  }
}

function Signup(req, res) {
  try {
    res.json("signup Success");
  } catch (error) {
    res.json(error);
  }
}

export { Login, Signup };
