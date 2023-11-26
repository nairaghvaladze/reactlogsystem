import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    
    const logout = () => {
      
        // window.localStorage.clear();

        window.localStorage.removeItem("email");
        window.localStorage.removeItem("password");

        

        navigate("/");
        window.localStorage.setItem("loggedin", false);
    }

    
    const navigate = useNavigate();
   useLayoutEffect (() => {
         const b = window.localStorage.getItem("loggedin");
       
        if(b === 'true') {
            navigate("/dashboard");
        }else {
            navigate("/");
        }
    });

    return (
        <div className="container">
            <h1>მთავარი გვერდი</h1>

            <h2>{window.localStorage.getItem("email")}</h2>

            <button type="button" onClick={logout} className="btn btn-success">Logout</button>
        </div>
    )
}

export default Dashboard;