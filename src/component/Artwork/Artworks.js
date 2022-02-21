import { useState } from 'react';
import FileUpload from "./FileUpload";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

export default function Artworks() {
    const [selectedImg, setSelectedImg] = useState(null);
    

    let categories = ['All Artwork', 'Artworks', 'Model', 'Logo']
    const defaultSelectValue = categories[0]
    const [selected, setSelected] = useState(defaultSelectValue)

    return (
        <div className="title">
            <h2> Digital Portfolio </h2>
            <p> Stay positive, negativity only begot stress -mr. V </p>

            <FileUpload />

            <form className='d-flex justify-content-end' >
                <div class="form-group col-md-4 mt-4" >
                    <select id="inputCategory" class="form-control" 
                    name={selected} value={selected} 
                    onChange={(e) => setSelected(e.target.value)}
                    defaultValue={selected}

                    >
                        {categories.map((data, i) => <option key={i} value={data}> {data} </option> )}
                    </select>
                </div>

            </form>

            <ImageGrid setSelectedImg={setSelectedImg} selected={selected} />
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}  />
            )}
        </div>
    )
}
