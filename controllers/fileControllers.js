const File = require("../models/fileModels")
const path = require("path");

exports.getFile = (req, res) => {
    const options = {
        root: path.join(__dirname+"/../uploads")
    }
    res.status(200).sendFile(req.params.filename, options, (err) => {
        if(err) console.log(err);
        else console.log("file sent")
    })
}

exports.getFileData = async (req, res) => {

    const file = await File.find({name: req.params.filename})

    res.status(200).json({
        ...(file["0"])
    })
}

exports.receiveUserFile = async (req, res) => {
    const newFile = await File.create({name: req.file.filename});
    res.status(200).json({
        status: 1,
        shareLink: `localhost:3000/${req.file.filename}`,
        file: {
            ...newFile
        }
    })
}