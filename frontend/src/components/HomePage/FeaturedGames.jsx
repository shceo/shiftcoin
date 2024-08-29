import React from 'react';
import styles from "../../styles/HomePage/FeaturedGames.module.css"
import Game from "./Game";
import tester from "../../assets/tester.png"

const FeaturedGames = () => {
    return (
        <div className={styles.featuredGames}>
            <p className={styles.tag}>Список Игр:</p>
            <div className={styles.games}>
                <Game
                    ava={tester}
                    name="2048"
                    description="2048 game"
                    link="/2048"/>
                <Game/>
                <Game/>
                <Game/>
                <Game/>
                <Game/>
            </div>
        </div>
    );
};

export default FeaturedGames;