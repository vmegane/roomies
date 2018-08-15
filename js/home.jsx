import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import YourHome from './yourhome.jsx';
import CreateHome from './createhome.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Your home</h2>
                <YourHome />
                <Link to="/createhome"><button>Create Home</button></Link>
            </div>
        )
    }
}

export default Home;