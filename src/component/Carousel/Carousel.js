import { useState } from 'react';
import FileUpload from "./FileUpload";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

export default function Artworks() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className='title'>
            <h2> Carousel </h2>
            <p> Put your trust in nobody, you could get bodied in the process -mr. V </p>

            <FileUpload />

            <ImageGrid setSelectedImg={setSelectedImg} />
            { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
        </div>
    )
}
