import {useState, useEffect} from "react";
import {downLoadFile, GetFileData} from "./fileApi";
import "../css/downloadPage.css"

export default (match) => {

    const [fileInfo, setFileInfo] = useState();

    const fileName = match.match.url;

    useEffect(()=>{
        GetFileData(fileName).then(res => {
            console.log(res.data)
            setFileInfo(res.data._doc);
        })
    }, [])

    return (
        <div className={"downloadContainer"}>
            {fileInfo?
                <div>
                    {!fileInfo.downloaded ?
                        <div>
                            <h2>File Will be deleted from server after download</h2>
                            <div className={"file-info"}>
                                <a className={"download-btn"} href={`http://localhost:8080/api/v1/files${fileName}/download`} download>Download</a>
                            </div>
                        </div>:
                        <h1>This file was already downloaded</h1>
                    }

                </div>:
                <h1>No such file exist</h1>
            }

        </div>
    )
}
