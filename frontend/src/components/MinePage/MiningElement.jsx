import React from 'react';
import styles from "../../styles/MinePage/MiningElement.module.css";
import coinIcon from "../../assets/Coin.svg";

const MiningElement = ({icon, text}) => {
    return (
        <div className={styles.miningElementContainer}>
            <img src={icon} alt="Time Mining" className={styles.miningElementIcon}/>
            <div className={styles.miningTextContainer}>
                <p className={styles.miningText}>{text}</p>
                <div className={styles.miningTextBottom}>
                    <img src={coinIcon} alt="Coin Icon" className={styles.miningCoin}/>
                    <p>256 • LVL 1</p>
                </div>
            </div>
            <p className={styles.arrow}>&gt;</p>
        </div>
    );
};

export default MiningElement;