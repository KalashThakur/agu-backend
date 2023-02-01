const express = require("express");
const connection = require("./Config/db");
const userController = require("./routes/user.route");
require('dotenv').config();

const PORT = process.env.PORT || 8080; 

const cors = require("cors");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home Page")
});

app.use(cors())

app.use("/user", userController);

app.listen(PORT, async () => {
    try{
        await connection
        console.log(`Listening at port ${PORT}`);
    }
    catch(err){
        console.log('Error occurred while running the server');
        console.log("err", err);
    }
})