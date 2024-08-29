import React from 'react';
import styles from "../styles/MinePage/MinePage.module.css"
import NavBar from "../components/NavBar/NavBar";
import MiningContainer from "../components/MinePage/MiningContainer";
import MiningInformation from "../components/MinePage/MiningInformation";
import BalanceMine from "../components/MinePage/BalanceMine";


const MinePage = () => {
    return (
        <div>
            <BalanceMine/>
            <div className={styles.minePage}>
                <MiningInformation/>
                <MiningContainer/>
            </div>
            <NavBar/>
        </div>
    );
};

export default MinePage;