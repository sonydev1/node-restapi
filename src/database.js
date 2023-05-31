import 'dotenv/config'
import mongoose from "mongoose";

const user = process.env.USER_DATABASE;
const password = process.env.PASSWORD_DATABASE;
const name_db = process.env.NAME_DATABASE;


  try {
    const db = await mongoose.connect(
      `mongodb+srv://${user}:${password}@cluster0.kcyd0lj.mongodb.net/${name_db}?retryWrites=true&w=majority`
    );
    console.log("✅ database is conected", db.connection.name);
  } catch (error) {
    console.error(error);
  }



