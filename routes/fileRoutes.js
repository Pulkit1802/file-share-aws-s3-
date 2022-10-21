const express = require("express");
const multer = require("multer");

const fileControllers = require("../controllers/fileControllers")

const router = express.Router();
const upload = multer({dest: "uploads/"});

router.route("/")
    .get(fileControllers.getALlFiles)
    .post(upload.single("file"),fileControllers.receiveUserFile);

module.exports = router;