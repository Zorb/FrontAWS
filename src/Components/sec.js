import React, {Component} from 'react';
import Win from './win.js';
import Loss from './loss.js';
import axios from "axios";
import {BaseURL, CreateAccount, red} from "../constants";


class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accountNum: this.props.accountNum,
            prize: 0,
            windowState: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        axios.get(BaseURL + CreateAccount + "/"+this.state.accountNum + red,
            {}).then((response) => {
                console.log(response.data);
            this.setState({
                prize: response.data
            });
            if (this.state.prize !== "£0") {
                this.setState({
                    windowState: 1
                });
            } else {
                this.setState({
                    windowState: 2
                });
            }
        });


    }


    render() {

        const Main = () => {
            return (
                <div>
                    <h1>Account Created</h1>
                    <br/><br/>
                    <p>Account Number: {this.state.accountNum}</p><br/>
                    <button onClick={this.handleClick}>Enter draw</button>
                </div>
            );
        };


        return (
            <div>
                {this.state.windowState === 0 && <Main/>}
                {this.state.windowState === 1 && <Win prize={this.state.prize}/>}
                {this.state.windowState === 2 && <Loss/>}
            </div>
        );
    }
}

export default Account;