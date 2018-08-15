import React from 'react';
import ReactDOM from 'react-dom';

class YourHome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Sample home</h2>
                <h3>Roomies</h3>
                <ul>
                    <li>Paulina</li>
                    <li>Justyna</li>
                </ul>
            </div>
        )
    }
}

export default YourHome;