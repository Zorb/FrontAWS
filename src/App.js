import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from "axios";
import {BaseURL, login, register} from './constants'
import Login from "./Components/Login";
import Register from "./Components/Register";
import HomePage from "./Components/HomePage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleClick = () => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if (email && password) {
            axios.post(BaseURL ,
                {
                    email: email,
                    password: password
                }).then((response) => {
                // this.setState({
                //     email: response.data.email
                // });
                document.getElementById("generateNum").click();
            });
        }else {
            document.getElementById("error").classList.remove("hidden");
        }

    };
    render() {
        return (
            <Router>
                <div className="App">
                    <Route  path={login} render={() => <Login/>}/>
                    <Route  path={register} render={() => <Register/>}/>
                    <Route exact path="/" render={() => <HomePage/>}/>
                </div>
            </Router>
        );
    }
}

export default App;