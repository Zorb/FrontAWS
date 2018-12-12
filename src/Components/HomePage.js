import React from 'react'

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
<h1>Home</h1>
        );
    }
}

export default HomePage;