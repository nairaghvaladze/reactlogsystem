import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);