import useFirestore from './Hooks/useFirestore';
import { motion } from 'framer-motion';
import { artFirestore } from '../firebaseConfig';
// import moment from 'moment';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

export default function ImageGrid({ setSelectedImg, selected }) {
    const { docs } = useFirestore('artworks');
    console.log(docs)


    const onDelete = (event) => {
        artFirestore.collection('artworks').doc(event).delete()
    }


    return (
        <div className="img-grid">
            {docs && docs.filter((data) => {
            if (data.select === selected) {
                return data
            }
            if (selected === 'All Artwork') {return data}

            }).map(doc => { 
                // let time = {
                // seconds: doc.createdAt.seconds,
                // nanoseconds: doc.createdAt.nanoseconds,
                // }
                
                // const fireBaseTime = new Date(
                // time.seconds * 1000 + time.nanoseconds / 1000000,
                // );
                // const date = fireBaseTime.toDateString();
                // const atTime = fireBaseTime.toLocaleTimeString();

                // console.log(date)
            
            
                return (
                <div className='img-cont'>
                    {/* {console.log(doc.createdAt.DateTimeFormat())} */}
                    <i onClick={() => onDelete(doc.id)} class="fas fa-trash-alt" style={{color: 'red', fontSize: '1.1rem'}}></i>
                    
                    <div className='card text-left'>
                    <motion.div className="img-wrap" key={doc.id} 
                        layout
                        whileHover={{ opacity: 1 }}
                        onClick={() => setSelectedImg(doc.url)}
                    >
                        <motion.img src={doc.url || 'http://via.placeholder.com/300x400'} alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        />
                    </motion.div>
                    
                    <div className='card-body'>
                        <h5 className='card-title'> {doc.title} </h5> 
                        <span className='card-text'> {doc.description} </span>
                    </div>

                    <div className="card-footer text-muted text-center">
                        {/* {moment(date, "YYYY MM DD").fromNow()} */}

                    </div>
                </div>
                </div>
            )
            })}
      </div>
    )
}
