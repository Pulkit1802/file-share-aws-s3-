import axios from "axios";

export const uploadFile = async (formData) => {
    return await axios.post('http://localhost:8080/api/v1/files', formData, {
        'content-type': 'multipart/form-data'
    })
}

export const downLoadFile = async (fileName) => {
    return await axios.get(`http://localhost:8080/api/v1/files${fileName}`)
}
