const express = require("express")

const fileRoutes = require("./routes/fileRoutes")

const app = express()

app.use(express.json());

app.use('/api/v1/files', fileRoutes)

module.exports = app;
