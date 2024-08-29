import React from 'react';
import styles from "../../styles/MinePage/MiningInformation.module.css"
import ProgressBar from "./ProgressBar";
import VolumesMine from "./VolumesMine";

const MiningInformation = () => {
    return (
        <div className={styles.miningInformation}>
            <p className={styles.miningPower}>Mining power</p>
            <ProgressBar/>
            <VolumesMine/>
        </div>
    );
};

export default MiningInformation;