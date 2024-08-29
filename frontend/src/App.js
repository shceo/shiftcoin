import React from "react";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AppRouters from "./components/AppRouters";

function App() {
    return (
        <Router>
            <AppRouters/>
        </Router>
    );
}

export default App;
