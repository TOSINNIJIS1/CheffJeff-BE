import React, { useEffect } from "react";
import { firebase } from '../../firebaseConfig';
import useFirestore from "../Hooks/useFirestore";


const Footer = ({ doc, id }) => {
    
    const [name, setName] = React.useState(doc.name);

    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('footer').doc(id).set({...doc, name})
        .then(res => {
            console.log('Product deleted Successfully');
        })
        .catch((error) => {
            console.error('Error removing document: ', error);
        });
    }

    async function onDelete (event) {
        const db = firebase.firestore()
        db
        .collection('footer')
        .doc(id)
        .delete()
        .update()
        .then(res => {
            console.log('Product deleted Successfully');
            // window.location.reload()
        })
        .catch((error) => {
            console.error('Error removing document: ', error);
        });
    }




    return (
        <div>
            <input
                value={name}
                onChange={e => {
                    setName(e.target.value);
                }}
            />

            <button onClick={onUpdate}>Update</button>
            {/* <button onClick={() => {onDelete(id)}}>Delete</button> */}
        </div>
    );
};

export default Footer