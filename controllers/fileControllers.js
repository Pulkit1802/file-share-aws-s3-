exports.getALlFiles = (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Server Ready to Receive"
    })
}

exports.receiveUserFile = (req, res) => {
    console.log(req.file);
    res.status(200).json({
        status: 1
    })
}