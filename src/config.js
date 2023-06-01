import { config } from "dotenv";
config();


const USER_DATABASE = process.env.USER_DATABASE;
const PASSWORD_DATABASE = process.env.PASSWORD_DATABASE;
const NAME_DATABASE = process.env.NAME_DATABASE;
const PORT= process.env.PORT || 4000
const URI = `mongodb+srv://${USER_DATABASE}:${PASSWORD_DATABASE}@cluster0.kcyd0lj.mongodb.net/${NAME_DATABASE}?retryWrites=true&w=majority&socketTimeoutMS=360000&connectTimeoutMS=360000`

export{NAME_DATABASE, USER_DATABASE, PASSWORD_DATABASE, PORT,URI};



