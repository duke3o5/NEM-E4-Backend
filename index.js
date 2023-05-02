const express=require("express");
const { connection } = require("./Config/db");
const { registerRouter } = require("./Routes/register.routes");
const { LoginRouter } = require("./Routes/login.routes");


const app=express();
app.use(express.json());

app.use("/users", registerRouter);
app.use("/users", LoginRouter);



app.listen(process.env.PORT, async()=>{
    try {
        await connection
        console.log("Connexted to atlas database");
    } catch (error) {
        console.log(error);
    }
    console.log("Server is running on Port", process.env.PORT);
});
