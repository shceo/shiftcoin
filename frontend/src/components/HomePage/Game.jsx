import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "../../styles/HomePage/FeaturedGames.module.css"

const Game = ({ava, name, description, link}) => {
    const navigate = useNavigate()

    const handlePlayClick = () => {
        navigate(link)
    }

    return (
        <div className={styles.game}>
            <img src={ava} alt="Game" className={styles.icon}/>
            <div className={styles.text}>
                <strong>{name}</strong>
                <p>{description}</p>
            </div>
            <button className={styles.play} onClick={handlePlayClick}>PLAY</button>
        </div>
    );
};

export default Game;