import React from 'react';
import styles from "../../styles/MinePage/MiningContainer.module.css";
import MiningElement from "./MiningElement";
import startIcon from "../../assets/MinePage/StartMine.svg";
import timeIcon from "../../assets/MinePage/TimeMine.svg";
import powerIcon from "../../assets/MinePage/PowerMine.svg";

const MiningContainer = () => {
    const getIconForIndex = (index) => {
        switch (index) {
            case 0:
                return timeIcon;
            case 1:
                return powerIcon;
            default:
                return timeIcon;
        }
    };
    return (
        <div className={styles.miningContainer}>
            <div className={styles.miningComponents}>
                {['Mining time', 'Mining power'].map((text, index) => (
                    <MiningElement
                        key={index}
                        index={index}
                        icon={getIconForIndex(index)}
                        text={text}
                    />
                ))}
            </div>
            <div className={styles.miningStart}>
                <img src={startIcon} alt="Start Mining" className={styles.startIcon}/>
                <p className={styles.startMining}>Start Mining</p>
            </div>
        </div>
    );
};

export default MiningContainer;