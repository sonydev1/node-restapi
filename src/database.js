import 'dotenv/config'
import mongoose from "mongoose";
import { URI } from './config.js';




  try {
    const db = await mongoose.connect(URI);
    console.log("✅ database is conected", db.connection.name);
  } catch (error) {
    console.error(error);
  }



