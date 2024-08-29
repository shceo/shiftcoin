import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from "react-swipeable";
import GridContainer from './GridContainer';
import Modal from './Modal';
import styles from '../styles/Table.module.css';

const initialGrid = () => {
    let grid = Array(4).fill(null).map(() => Array(4).fill(null));
    addRandomTile(grid);
    addRandomTile(grid);
    return grid;
};

const addRandomTile = (grid) => {
    let emptyCells = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === null) {
                emptyCells.push({ x: i, y: j });
            }
        }
    }
    if (emptyCells.length === 0) return false;
    let { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    grid[x][y] = Math.random() < 0.9 ? 2 : 4;
    return true;
};

const checkGameOver = (grid) => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === null) return false;
            if (j < 3 && grid[i][j] === grid[i][j + 1]) return false;
            if (i < 3 && grid[i][j] === grid[i + 1][j]) return false;
        }
    }
    return true;
};

const G2048 = () => {
    const [grid, setGrid] = useState(initialGrid);
    const [isGameOver, setIsGameOver] = useState(false);
    const navigate = useNavigate();

    const moveLeft = (grid) => {
        let newGrid = grid.map(row => row.slice());
        let moved = false;

        for (let i = 0; i < 4; i++) {
            let row = newGrid[i];
            let newRow = [];
            for (let j = 0; j < 4; j++) {
                if (row[j] !== null) {
                    newRow.push(row[j]);
                }
            }
            for (let j = 0; j < newRow.length - 1; j++) {
                if (newRow[j] === newRow[j + 1]) {
                    newRow[j] *= 2;
                    newRow[j + 1] = null;
                }
            }
            newRow = newRow.filter(val => val !== null);
            while (newRow.length < 4) {
                newRow.push(null);
            }
            newGrid[i] = newRow;
            if (newRow.toString() !== row.toString()) {
                moved = true;
            }
        }
        return { newGrid, moved };
    };

    const rotateGrid = (grid) => {
        let newGrid = Array(4).fill(null).map(() => Array(4).fill(null));
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                newGrid[j][3 - i] = grid[i][j];
            }
        }
        return newGrid;
    };

    const move = (direction) => {
        let newGrid = grid.map(row => row.slice());
        let moved = false;
        switch (direction) {
            case 'left':
                ({ newGrid, moved } = moveLeft(newGrid));
                break;
            case 'right':
                newGrid = rotateGrid(rotateGrid(newGrid));
                ({ newGrid, moved } = moveLeft(newGrid));
                newGrid = rotateGrid(rotateGrid(newGrid));
                break;
            case 'up':
                newGrid = rotateGrid(rotateGrid(rotateGrid(newGrid)));
                ({ newGrid, moved } = moveLeft(newGrid));
                newGrid = rotateGrid(newGrid);
                break;
            case 'down':
                newGrid = rotateGrid(newGrid);
                ({ newGrid, moved } = moveLeft(newGrid));
                newGrid = rotateGrid(rotateGrid(rotateGrid(newGrid)));
                break;
            default:
                break;
        }
        if (moved) {
            addRandomTile(newGrid);
            setGrid(newGrid);
        }
    };

    useEffect(() => {
        if (checkGameOver(grid)) {
            setIsGameOver(true);
        }
    }, [grid]);

    const handlers = useSwipeable({
        onSwipedLeft: () => move('left'),
        onSwipedRight: () => move('right'),
        onSwipedUp: () => move('up'),
        onSwipedDown: () => move('down'),
        preventDefaultTouchmoveEvent: true
    });

    const closeModal = () => {
        setIsGameOver(false);
        navigate('/home');
    };

    return (
        <div {...handlers} className={styles.table}>
            <GridContainer grid={grid} />
            {isGameOver && <Modal onClose={closeModal} />}
        </div>
    );
};

export default G2048;
