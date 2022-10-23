const express = require("express")
const cors = require("cors")

const fileRoutes = require("./routes/fileRoutes")

const app = express()

const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
}

app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/v1/files', fileRoutes)

module.exports = app;