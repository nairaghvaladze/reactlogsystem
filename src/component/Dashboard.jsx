import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const logout = () => {
        

        window.localStorage.removeItem("email");
        window.localStorage.removeItem("password");

        window.localStorage.setItem("loggedin", false);

        navigate("/");
    }

    const navigate = useNavigate();

    useEffect(() => {
        const log = window.localStorage.getItem("loggedin");

        if(log === "true") {
            navigate("/dashboard");
        }else {
            navigate("/");
        }
    });

    return (
        <div className="container text-center">
            <h1>კეთილი იყოს შენი მობრძანება!</h1>

            <h2>{window.localStorage.getItem("email")}</h2>

            <button type="button" onClick={logout} className="btn btn-success">Logout</button>
        </div>
    )
}

export default Dashboard;