import {useState} from "react";
import {uploadFile} from "./fileApi";
import "../css/main.css"

export default () => {

    const [file, setFile] = useState()
    const [shareLink, setShareLink] = useState("");
    const [uploadVisibility, setUploadVisibility] = useState(false);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        if(e.target.files) setUploadVisibility(prevState => !prevState);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);

        if(file.size/1000000 < 20) {
            uploadFile(formData).then(res => {
                setShareLink(res.data.shareLink)
                console.log(res.data);
            })
        } else {
            console.log("too big")
        }

        setUploadVisibility(prevState => !prevState);

    }

    const handleClick = async () => {
        document.getElementById("uploadFile").click();
        setShareLink("");
    }

    return (
        <div className="uploadContainer">
            <h1>Share File Safely with anyone<br></br>anywhere</h1>

            <div className={"uploadForm"}>

                <h2>{shareLink?
                    "Share below link with your friend":
                    "Upload a file to share"
                }
                </h2>

                {(file && uploadVisibility )?<h4>Upload {file.name}</h4>:console.log("go")}

                {shareLink?<h4>{shareLink}</h4>:<></>}

                <form onSubmit={handleSubmit}>
                    <input id={"uploadFile"} type="file" onChange={handleChange} required={true} />
                    <button type={"submit"} className={"btn"} style={
                        {
                            display: (uploadVisibility)?"inline-block":"none"
                        }
                    }>Upload File</button>
                </form>

                {uploadVisibility ?
                    <></> :
                    <div className={"btn"} onClick={handleClick}>Select File</div>
                }

            </div>


        </div>
    );
}