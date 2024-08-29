import React from 'react';
import styles from "../../styles/MinePage/BalanceMine.module.css"

const BalanceMine = () => {
    return (
        <div className={styles.balanceMine}>
            <p className={styles.balance}>Баланс</p>
            <p className={styles.balanceCount}>0 $SHC</p>
        </div>
    );
};

export default BalanceMine;