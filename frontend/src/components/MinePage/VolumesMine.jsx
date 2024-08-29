import React from 'react';
import styles from "../../styles/MinePage/VolumeMine.module.css"

const VolumesMine = () => {
    return (
        <div className={styles.volumeMine}>
            <span>2 SHC/h&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Max 15h</span>
            <p className={styles.mat}>Boost mining power/time</p>
        </div>
    );
};

export default VolumesMine;