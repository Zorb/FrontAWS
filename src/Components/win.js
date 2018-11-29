import React, {Component} from 'react';

class Win extends Component {

    render() {
        return (
            <div className='ui segment'>
            <div className="Win">
                <div className='winText'>
                    <h1>Congratulations you won:</h1>
                    <br/><br/>
                    <div className='ui tag labels'>
                        <h1 className='ui teal massive label'>{this.props.prize}</h1>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Win;