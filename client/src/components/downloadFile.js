import {downLoadFile} from "./fileApi";

export default (match) => {

    const fileName = match.match.url;

    const handleSubmit = (e) => {
        e.preventDefault();
        downLoadFile(fileName).then(res => console.log(res.data));
    }

    return (
        <div>
            <a href={`http://localhost:8080/api/v1/files${fileName}/download`} download>Download</a>
        </div>
    )
}
