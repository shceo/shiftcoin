import React from 'react';
import styles from '../../styles/NavBar.module.css'
import NavBarElement from "./NavBarElement";
import homeIcon from '../../assets/NavBar/HomeNavBar.svg'
import earnIcon from '../../assets/NavBar/EarnNavBar.svg'
import mineIcon from '../../assets/NavBar/MineNavBar.svg'
import friendsIcon from '../../assets/NavBar/FriendsNavBar.svg'
import {useLocation} from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    const getIconForIndex = (index) => {
        switch (index) {
            case 0:
                return [homeIcon, "/home"];
            case 1:
                return [earnIcon, "/earn"];
            case 2:
                return [mineIcon, "/mine"];
            case 3:
                return [friendsIcon, "/friends"];
            default:
                return [homeIcon, "/home"];
        }
    };

    const getSelectedIndex = (path) => {
        switch (path) {
            case "/home":
                return 0;
            case "/earn":
                return 1;
            case "/mine":
                return 2;
            case "/friends":
                return 3;
            default:
                return 0;
        }
    };

    const selectedIndex = getSelectedIndex(location.pathname);

    return (
        <nav className={styles.navbar}>
            {['home', 'earn', 'mine', 'friends'].map((text, index) => (
                <NavBarElement
                    key={index}
                    index={index}
                    icon={getIconForIndex(index)[0]}
                    url={getIconForIndex(index)[1]}
                    alt={text}
                    text={text}
                    isSelected={index === selectedIndex}
                />
            ))}
        </nav>
    );
};

export default NavBar;