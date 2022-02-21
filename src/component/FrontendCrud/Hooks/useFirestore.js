import { useState, useEffect } from 'react';
import { artFirestore } from '../../firebaseConfig';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    const [nav, setNav] = useState([]);
    const [about, setAbout] = useState([]);
    const [contact, setContact] = useState([]);
    const [footer, setFooter] = useState([]);




    useEffect(() => {
        async function arr () {
            await artFirestore.collection(collection)
            .get().then((snap) => {
                let document = [];
                snap.forEach(doc => {
                    document.push({...doc.data(), id: doc.id})
                });
                setDocs(document)
                setNav(document)
                setAbout(document)
                setContact(document)
                setFooter(document)

            })
        }
        arr()
    }, [collection])

    return { docs, nav, about, contact, footer };
}

export default useFirestore;