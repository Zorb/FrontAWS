import React, {Component} from 'react'


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountNum: '',
            prize: 0
        }
    }

    render() {
        return (
            <div>
                <h1>Create Account</h1>
                <br/><br/>
                <input placeholder={"First Name"} id='firstName' type='text' required/>
                <input placeholder={"Last Name"} id='lastName' type='text' required/>
                <button id="submitBtn" onClick={this.props.theClick}>Submit</button>

            </div>
        );
    }
}

export default Form;