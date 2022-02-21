import { useState, useEffect, useRef } from "react";
import ProgressBar from "./ProgressBar";
import '../../App.css';
import { artFirestore, artStorage, timestamp } from "../firebaseConfig";
// import { artFirestore, artStorage, timestamp } from "../firebaseConfig";




export default function FileUpload() {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null);
  const [data, setData] = useState('')

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [select, setSelect] = useState('')

  console.log(data)

  // const select = []

  const changeFile = (e) => {
    let selectFile = e.target.files[0];

    if (selectFile !== null) {
        setFile(selectFile)
        setError('')
    } else {
        setError('select an image Mr. Jeff ')
    }
  }

  const uploadFile = (event) => {
    event.preventDefault();
    
    const storageRef = artStorage.ref(`artworks/${file.name}`)
    // reference to the collection we are saving into
    const collectionRef = artFirestore.collection('artworks');

    storageRef.put(file).on('state_changed', () => { }, (err) => {
        setError(err, 'boom')
    }, async () => {
        const url = await storageRef
        .getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt, title, description, select });
        setData(url)
    })
    
  }


  let categories = ['All Artwork', 'Artworks', 'Model', 'Logo'] 


    return (
      <div className="container">


        <div class="col-sm-6">
          <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"> &AElig; <span>Add New Artwork</span></a>
        </div>

        <div id="addEmployeeModal" class="modal fade" >
          <div class="modal-dialog">
            <div class="modal-content">
              <form className="formStyle">
                <div class="modal-header">
                  <h4 class="modal-title" style={{color: 'white'}}>Add Artwork</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label>Title</label>
                    <input type="text" name="title" class="form-control form-control-lg p-3" 
                    value={title} onChange={(e) => setTitle(e.target.value)} 
                    />
                  </div>  transition: .75s;

                  <div class="form-group">
                    <div class="custom-file">
                      <input type="file" onChange={changeFile} class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                      <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                  </div>
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control"
                    value={description} onChange={(e) => setDescription(e.target.value)} 

                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label>Select Art Type</label>
                    <select id="inputCategory" class="form-control" 
                        name={select} 
                        value={select} 
                        onChange={(e) => setSelect(e.target.value)}
                        >
                            {categories.map((data, i) => <option key={i} value={data}> {data} </option> )}
                        </select>             
                  </div>
                </div>
                <div class="modal-footer">
                  <input type="button" class="btn btn-secondary" data-dismiss="modal" value="Cancel" />
                  <input type="submit" class="btn btn-success" value="Add" 
                  onClick={uploadFile}
                  />
                </div>

                <div>
                  {error && <div className="error"> {error}  </div>}
                  {file && <div className="error"> {file.name}  </div>}
                  {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
              
              </form>
            </div>
          </div>
        </div>
    </div>
    )
}

