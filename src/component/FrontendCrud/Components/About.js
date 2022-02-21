import React from "react";
import { firebase } from 'firebase';
// import useFirestore from "../Hooks/useFirestore";


const About = ({ doc, id }) => {
    
    const [name, setName] = React.useState(doc);
    console.log(name)

    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('about').doc(id).update({...doc, name})
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
        .collection('about')
        .doc(id)
        .delete()
        .update()
        .then(res => {
            console.log('Product deleted Successfully');
        })
        .catch((error) => {
            console.error('Error removing document: ', error);
        });
    }




    return (
        <div>
            <input
                value={name.description}
                onChange={e => {
                    setName(e.target.value);
                }}
            />

            <button onClick={onUpdate}>Update</button>
            {/* <button onClick={() => {onDelete(id)}}>Delete</button> */}
        </div>
    );
};

export default About