import React from 'react';
import GridRow from './GridRow';
import styles from '../styles/GridContainer.module.css';

const GridContainer = ({ grid }) => {
    return (
        <div className={styles.grid}>
            {grid.map((row, rowIndex) => (
                <GridRow key={rowIndex} row={row} rowIndex={rowIndex} />
            ))}
        </div>
    );
};

export default GridContainer;
