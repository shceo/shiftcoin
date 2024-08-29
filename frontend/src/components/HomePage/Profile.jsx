import React from 'react';
import ava from "../../assets/ava.png";
import styles from "../../styles/HomePage/Profile.module.css";

const Profile = () => {
    return (
        <div className={styles.container}>
            <img src={ava} alt="Avatar" className={styles.avatar} />
            <span>Some Nick</span>
        </div>
    );
};

export default Profile;
