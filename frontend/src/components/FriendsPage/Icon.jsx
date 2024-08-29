import React from 'react';
import friendIcon from "../../assets/FriendsPage/Friends.svg";
import styles from "../../styles/FriendsPage/FriendsPage.module.css";

const Icon = () => {
    return (
        <div className={styles.friendIcon}>
            <img src={friendIcon} alt="friendIcon" className={styles.friendIcon}/>
        </div>
    );
};

export default Icon;