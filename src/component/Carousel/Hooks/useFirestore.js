import { useState, useEffect } from 'react';
import { artFirestore } from '../../firebaseConfig';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = artFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let document = [];
            snap.forEach(doc => {
                document.push({...doc.data(), id: doc.id})
            });
            setDocs(document)
        })
        
        //cleanup
        return () => unsub();
    }, [collection])

    return { docs };
}

export default useFirestore;