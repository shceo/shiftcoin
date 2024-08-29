import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import InviteContainer from "../components/FriendsPage/InviteContainer";
import FriendsList from "../components/FriendsPage/FriendsList";
import ClaimContainer from "../components/FriendsPage/ClaimContainer";
import Icon from "../components/FriendsPage/Icon";

const FriendsPage = () => {
    return (
        <div>
            <Icon/>
            <ClaimContainer/>
            <FriendsList/>
            <InviteContainer/>
            <NavBar/>
        </div>
    );
};

export default FriendsPage;