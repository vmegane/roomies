import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    toggleMenu = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleClick = (e) => {
        this.toggleMenu();
            console.log("clicked");
        e.stopPropagation();
      }

    render() {
        return (
            <div className="navigation">
                <div className="nav-header" onClick={this.handleClick}>
                    <h2>Menu</h2>
                </div>
                <ul>
                    <li>
                        <Link to="/latest">Latest</Link>
                    </li>
                    <li>
                        <Link to="/fridge">Frigde</Link>
                    </li>
                    <li>
                        <Link to="/home">Your home</Link>
                    </li>
                    <li>
                        <Link to="/user">Your profile</Link>
                    </li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;