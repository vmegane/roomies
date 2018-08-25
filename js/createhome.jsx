import React from 'react';
import ReactDOM from 'react-dom';

class CreateHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homename: '',
            roommates: [],
            homeid: '' }
    }
    
    handleEmails = (e) => {
        let prevState = this.state.roommates;
        this.setState({
            roommates: [e.target.value, ...prevState]
        })
        
    }

    render() {
        
        return (
            <div>
                <h2>Creating your home</h2>
                <form id="form-create-home">
                    <label> Your home name <br/>
                    <input type="text" /> <br />
                    invite roomies
                    </label><br />
                        <label>
                            <input value={this.state.roommates[0]} type="text" onChange={this.handleEmails}/>
                        </label>
                        <button value="" onClick={this.addInput}>+</button>

                </form>
            </div>
        )
    }
}

export default CreateHome;