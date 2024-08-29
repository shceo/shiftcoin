import React from 'react';
import styles from "../../styles/MinePage/ProgressBar.module.css"
import timeIcon from "../../assets/MinePage/TimeMine.svg";

const ProgressBar = () => {
    return (
        <div className={styles.progressBarContainer}>
            <img src={timeIcon} alt="Time Mining"/>
            <span>4.12h</span>
            <progress
                value={70}
                max={100}
                className={styles.progressBar}
            />
            <span>5h</span>
        </div>
    );
};

export default ProgressBar;