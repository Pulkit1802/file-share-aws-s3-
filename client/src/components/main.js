import {useState} from "react";
import {uploadFile} from "./fileApi";

export default () => {

    const [file, setFile] = useState()
    const [shareLink, setShareLink] = useState("");

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);

        uploadFile(formData).then(res => {
            setShareLink(res.data.shareLink)
            console.log(res.data);
        })

    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1>React File Upload</h1>
                <input type="file" onChange={handleChange}/>
                <button type="submit">Upload</button>
            </form>

            <div>{shareLink}</div>

        </div>
    );
}