import React from "react";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            email : "",
            password : ""
        }
    }

    setEmail = (event) => {
        this.setState({
            email : event.target.value
        })
    }

    setPass = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    login(event) {
        event.preventDefault();

        window.localStorage.setItem("email", this.state.email);
        window.localStorage.setItem("password", this.state.password);

        window.localStorage.setItem("loggedin", true);
    
    }

    render() {
        return (
            <div className="container mt-5">
                <form onSubmit={(event) => this.login(event)}>
                    <input type="email" className="form-control" placeholder="email" onChange={(event) => this.setEmail(event)} value={this.state.email} /><br />
                    <input type="password" className="form-control" placeholder="password" onChange={(event) => this.setPass(event)} value={this.state.password} /><br />
                    <input type="submit" className="btn btn-info" />
                </form>
                {
                    window.localStorage.getItem("loggedin") === "true" ? <Navigate to={"/dashboard"} /> : ""
                }
               
            </div>
        )
    }
}

export default Login;