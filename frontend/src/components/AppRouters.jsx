import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import MinePage from "../pages/MinePage";
import FriendsPage from "../pages/FriendsPage";
import EarnPage from "../pages/EarnPage";
import G2048 from "../games/2048/components/G2048";

const AppRouters = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/mine" element={<MinePage/>}/>
            <Route path="/friends" element={<FriendsPage/>}/>
            <Route path="/earn" element={<EarnPage/>}/>
            <Route path="/2048" element={<G2048/>}/>
            <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Routes>
    );
};

export default AppRouters;