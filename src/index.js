import app from "./app.js";
import  "./database.js";
import "dotenv/config";


const port= process.env.PORT || 4000


app.listen(port,  () => {
    console.log('🚀🚀 Server listening on port '+port);
  
});


