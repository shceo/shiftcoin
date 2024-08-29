import React from 'react';
import coinIcon from "../../assets/Coin.svg";
import styles from "../../styles/FriendsPage/ClaimContainer.module.css"

const ClaimContainer = () => {
    return (
        <div className={styles.claimContainer}>
            <img src={coinIcon} alt="Coin Icon"/>
            <span>SHC - 0.000</span>
            <div className={styles.claim}>Claim</div>
        </div>
    );
};

export default ClaimContainer;