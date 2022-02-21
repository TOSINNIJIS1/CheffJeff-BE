import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function FileUpload() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const fileTypes = ['image/png', 'image/jpeg']

    const changeFile = (e) => {
        let selectFile = e.target.files[0];

        if (selectFile && fileTypes.includes(selectFile.type)) {
            setFile(selectFile)
            setError('')
        } else {
            setFile(file)
            setError('select an image Mr. Jeff ')
        }
    }


    return (
        <form>
            <div class="input-group">
                <div class="custom-file">
                    <input type="file" onChange={changeFile} class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                    <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                </div>
            </div>
            <div>
                {error && <div className="error"> {error}  </div>}
                {file && <div className="error"> {file.name}  </div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
