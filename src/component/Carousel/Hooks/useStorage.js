import { useState, useEffect } from 'react';
import { artStorage, artFirestore, timestamp } from '../../firebaseConfig';

export default function useStorage(file) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null)


    useEffect(() => {
        //reference
        const storageRef = artStorage.ref(`carousel/${file.name}`)
        // reference to the collection we are saving into
        const collectionRef = artFirestore.collection('carousel');

        storageRef.put(file).on('state_changed', (snap) => { 
            // % formula
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err, 'boom')
        }, async () => {
            const url = await storageRef
            .getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt });
            setUrl(url)
        })

    }, [file])


    return {progress, url, error}
}
