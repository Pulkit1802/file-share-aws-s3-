const express = require("express");
const multer = require("multer");

const fileControllers = require("../controllers/fileControllers")

const router = express.Router();
const upload = multer({dest: "uploads/"});

router.route("/")
    .post(upload.single("file"), fileControllers.receiveUserFile);

router.route("/:filename")
    .get(fileControllers.getFileData)

router.route("/:filename/download")
    .get(fileControllers.getFile)

module.exports = router;