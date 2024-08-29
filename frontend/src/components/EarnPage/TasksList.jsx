import React from 'react';
import Task from "./Task";
import styles from "../../styles/EarnPage/TaskList.module.css";

const TasksList = () => {
    return (
        <div className={styles.taskList}>
            <p className={styles.tag}>Список заданий</p>
            <div className={styles.tasks}>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
            </div>
        </div>
    );
};

export default TasksList;