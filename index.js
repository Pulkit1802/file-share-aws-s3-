const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config({path: "./config.env"});

const app = require("./app")

mongoose.connect(process.env.DATABASE, {}).then(() => console.log("DataBase Connected"))

const port = process.env.PORT;

app.listen(port, () => console.log("Server started at port 8080"));