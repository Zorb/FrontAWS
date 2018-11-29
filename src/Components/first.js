import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css';

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

            <div className='ui segment'>

                <div className='ui form'>
                <h1>Create Account</h1>
                <br/><br/>
                    <div className='equal width fields'>
                        <div className='required field'>
                            <label>First name</label>
                            <div className='ui fluid input'>
                <input placeholder={"First Name"} id='firstName' type='text' required/>
                            </div></div>
                    <div className='required field'>
                        <label>Last name</label>
                        <div className='ui fluid input'>
                            <input placeholder={"Last Name"} id='lastName' type='text' required/>
                        </div></div></div>
                <button id="submitBtn" className='ui button' onClick={this.props.theClick}>Submit</button>
                   </div>
                <div className="ui hidden error message" id='error'>You have to fill all the fields!</div>
            </div>
        );
    }
}

export default Form;