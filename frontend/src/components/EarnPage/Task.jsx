import React from 'react';
import tester from "../../assets/tester.png";
import styles from "../../styles/EarnPage/Task.module.css";
import coinIcon from "../../assets/Coin.svg";

const Task = () => {
    return (
        <div className={styles.task}>
            <img src={tester} alt="Game" className={styles.iconTask}/>
            <div className={styles.text}>
                <strong>Название задания</strong>
                <p>Описание задания</p>
            </div>
            <div>
                <span>1000 $SHC</span>
                <img src={coinIcon} alt="Game" className={styles.coinIcon}/>
            </div>
        </div>
    );
};

export default Task;