import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import axios from "axios";
import {BaseURL, CreateAccount, LinkAccountNumGen} from './constants'
import Form from "./Components/first";
import Account from "./Components/sec";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountNum: '',
            prize: 0
        }
    }

    handleClick = () => {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        if (firstName && lastName) {
            axios.post(BaseURL + CreateAccount,
                {
                    firstName: firstName,
                    lastName: lastName
                }).then((response) => {
                this.setState({
                    accountNum: response.data.accountNumber
                });
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
                    <Link to={LinkAccountNumGen} id='generateNum'/>
                    <Route exact path="/" render={() => <Form theClick={this.handleClick}/>}/>
                    <Route path={LinkAccountNumGen} render={() => <Account accountNum={this.state.accountNum}/>}/>
                </div>
            </Router>
        );
    }
}

export default App;