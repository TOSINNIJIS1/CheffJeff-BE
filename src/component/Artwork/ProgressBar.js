import React, { useEffect } from 'react';
import { motion } from 'framer-motion';


export default function ProgressBar({ url, setFile, progress }) {

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);
    return (
        <motion.div className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: progress + '%' }}
        ></motion.div>
    )
}
