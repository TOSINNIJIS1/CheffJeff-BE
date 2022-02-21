import React, { useEffect } from "react";
import { firebase } from '../../firebaseConfig';
import useFirestore from "../Hooks/useFirestore";


const Contact = ({ doc, id }) => {
    
    const [name, setName] = React.useState(doc.name);

    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('contact').doc(id).set({...doc, name})
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
        .collection('contact')
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

export default Contact