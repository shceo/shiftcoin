import React from 'react';
import Friend from "./Friend";
import styles from "../../styles/FriendsPage/FriendsList.module.css";

const FriendsList = () => {
    return (
        <div className={styles.friendsList}>
            <p>Список друзей</p>
            <div>
                <Friend/>
                <Friend/>
                <Friend/>
                <Friend/>
            </div>
        </div>
    );
};

export default FriendsList;