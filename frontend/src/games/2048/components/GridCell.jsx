import React from 'react';
import styles from '../styles/GridCell.module.css';

const GridCell = ({ value, rowIndex, cellIndex }) => {
    const cellClass = value ? `value-${value}` : 'empty';
    return (
        <div
            className={`${styles.cell} ${styles[cellClass]}`}
            style={{ gridColumn: cellIndex + 1, gridRow: rowIndex + 1 }}
        >
            {value}
        </div>
    );
};

export default GridCell;
