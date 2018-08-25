import React from 'react';
import ReactDOM from 'react-dom';

class CreateHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homename: ''        }
    }
    setNumberofRoomies = (e) => {
        e.preventDefault();
        this.setState({ numberofroomies: e.target.value })
    }
    setCustomNumberofRoomies = (e) => {
        e.preventDefault();
        this.setState({ numberofroomies: e.target.value })
    }

    render() {
        
        return (
            <div>
                <h2>Creating your home</h2>
                <form id="form-create-home">
                    <label> Your home name
                    <input type="text" />
                    invite roomies
                    </label><br />
                        <label>
                            <input value="email..." type="text"/>
                        </label>
                        <button value="" onClick={this.addInput}>+</button>

                </form>
            </div>
        )
    }
}

export default CreateHome;