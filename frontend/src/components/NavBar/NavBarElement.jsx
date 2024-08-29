import React from 'react';
import styles from '../../styles/NavBar.module.css';
import {Link} from "react-router-dom";

const NavBarElement = ({icon, alt, text, isSelected, url}) => {
    return (
        <Link
            className={`${styles.navbarElement} ${isSelected ? styles.selected : ''}`}
            to={url}

        >
            <img src={icon} alt={alt} className={styles.icon}/>
            {text}
        </Link>
    );
};

export default NavBarElement;
