import React from "react";
import Navbar from "./components/Navbar";
import Navigator from "./components/Navigator";
import './stylesheets/App.css';
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Navigator/>
            </BrowserRouter>
        </div>


    )
}

export default App;