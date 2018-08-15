import React from 'react';
import ReactDOM from 'react-dom';

class CreateHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homename: '',
            numberofroomies: ''
        }
    }
    setNumberofRoomies = (e) => {
            e.preventDefault();
            this.setState({numberofroomies: e.target.value})
    }
    setCustomNumberofRoomies = (e) => {
        e.preventDefault();
        this.setState({numberofroomies: e.target.value})
}

    render() {
        let inputs = [];
        for (let i = 0; i < this.state.numberofroomies; i++) {
           inputs[i] = <input type="email" key={`inputfield-${i}`}/>
        }
        return (
            <div>
                <h2>Creating your home</h2>
                <form>
                    <label> Your home name
                    <input type="text"/>
                    </label><br/>
                    <label>
                        Number of roommates
                        <button value="2" onClick={this.setNumberofRoomies}>2</button>                        
                        <button value="3" onClick={this.setNumberofRoomies}>3</button>
                        <button value="4" onClick={this.setNumberofRoomies}>4</button>
                        <input placeholder="other" size="5" value={this.state.numberofroomies} onChange={this.setCustomNumberofRoomies} type="number"/>

                    </label>
                    {inputs.map( element => element)}
                </form>
            </div>
        )
    }
}

export default CreateHome;