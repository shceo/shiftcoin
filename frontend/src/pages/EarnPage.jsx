import React from 'react';
import NavBar from "../components/NavBar/NavBar";
import TasksList from "../components/EarnPage/TasksList";
import FinishedTasks from "../components/EarnPage/FinishedTasks";

const EarnPage = () => {
    return (
        <div>
            <TasksList/>
            <FinishedTasks/>
            <NavBar/>
        </div>
    );
};

export default EarnPage;