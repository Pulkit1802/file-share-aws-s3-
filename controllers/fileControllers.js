const File = require("../models/fileModels")
const fs = require("fs")
const path = require("path");

exports.getFile = async (req, res) => {
    const options = {
        root: path.join(__dirname+"/../uploads")
    }

    const file = await File.find({name: req.params.filename})

    if(!file[0].downloaded) {
        res.status(200).sendFile(req.params.filename, options, (err) => {
            if(err) console.log(err);
            else console.log("file sent")
        })

        file[0].downloaded = true;
        file[0].save();


        setTimeout(()=> fs.unlink(options.root + `${req.params.filename}`), 60000);



    }

}

exports.getFileData = async (req, res) => {

    const file = await File.find({name: req.params.filename})

    if(file)
        res.status(200).json({
            ...(file["0"])
        })
    else res.status(404).json({})
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