import React from 'react';
import styles from "../../styles/FriendsPage/InviteConatainer.module.css";
import inviteIcon from "../../assets/FriendsPage/InviteFriend.svg"
import copyIcon from "../../assets/FriendsPage/CopyFriend.svg"

const InviteContainer = () => {
    return (
        <div className={styles.inviteContainer}>
            <div className={styles.invite}>
                <span className={styles.span}>Invite Friend</span>
                <img src={inviteIcon} alt="inviteIcon" className={styles.icon}/>
            </div>
            <div className={styles.copy}>
                <img src={copyIcon} alt="inviteIcon" className={styles.icon}/>
            </div>
        </div>
    );
};

export default InviteContainer;