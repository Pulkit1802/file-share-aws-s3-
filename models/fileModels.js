const mongoose = require("mongoose")

const fileSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    downloaded: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    downloadAt: Date,
});

const File = mongoose.model('file', fileSchema);

module.exports = File;