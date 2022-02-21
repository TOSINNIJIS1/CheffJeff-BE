import useFirestore from './Hooks/useFirestore';
import { motion } from 'framer-motion';
import { artFirestore } from '../firebaseConfig';

export default function ImageGrid({ setSelectedImg }) {
    const { docs } = useFirestore('carousel');

    const onDelete = (event) => {
        artFirestore.collection('carousel').doc(event).delete()
    }


    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div>
                    <i onClick={() => onDelete(doc.id)} class="fas fa-trash-alt" style={{color: 'red', fontSize: '1.1rem'}}></i>
                    <motion.div className="img-wrap" key={doc.id} 
                        layout
                        whileHover={{ opacity: 1 }}
                        onClick={() => setSelectedImg(doc.url)}
                    >
                        <motion.img src={doc.url} alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        />
                    </motion.div>
                </div>

                
            ))}
      </div>
    )
}
