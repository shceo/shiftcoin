import React from "react";
import NavBar from "../components/NavBar/NavBar";
import FeaturedGames from "../components/HomePage/FeaturedGames";
import Profile from "../components/HomePage/Profile";

function HomePage() {
    return (
        <div>
            <Profile/>
            <FeaturedGames/>
            <NavBar/>
        </div>
    );
}

export default HomePage;