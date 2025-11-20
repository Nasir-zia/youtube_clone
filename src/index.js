import dotenv from "dotenv";
import connectDB from "./db/dbconnection.js";
import  app  from "./db/dbconnection.js";
dotenv.config();


connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is running on PORT ${process.env.PORT}`);
    })
})

.catch((error) =>{
    console.log("Failed to connect to database",error)
})


