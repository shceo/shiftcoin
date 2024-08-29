import React from 'react';
import GridCell from './GridCell';
import styles from '../styles/GridRow.module.css';

const GridRow = ({ row, rowIndex }) => {
    return (
        <div className={styles.row}>
            {row.map((cell, cellIndex) => (
                <GridCell key={cellIndex} value={cell} rowIndex={rowIndex} cellIndex={cellIndex} />
            ))}
        </div>
    );
};

export default GridRow;
