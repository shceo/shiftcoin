import React from 'react';
import styles from '../styles/Modal.module.css';

const Modal = ({ onClose }) => {
    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <h2>Game Over</h2>
                <button onClick={onClose}>Меню</button>
            </div>
        </div>
    );
};

export default Modal;
