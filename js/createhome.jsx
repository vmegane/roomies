import React from 'react';
import ReactDOM from 'react-dom';

class CreateHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homename: '',
            homeid: '',
            numberOfHomes: '' 
        }
    }

    componentDidMount() {
        fetch(`https://roomies-80535.firebaseio.com/homes.json`)
            .then(resp => resp.json())
            .then(resp => this.setState({ numberOfHomes: Object.keys(resp).length }))
    }

    fillName = (e) => {
        this.setState({
            homename: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        const newHome = {
            homename: this.state.homename
        }
        fetch(`https://roomies-80535.firebaseio.com/homes/home-${this.state.numberOfHomes+1}.json`,
            {
                method: "PUT",
                body: JSON.stringify(newHome)
            }
        ).then( () => {
            this.setState({
                homeid: `home-${this.state.numberOfHomes+1}`
            })
        })
    }

    render() {
        
        return (
            <div>
                <h2>Creating your home</h2>
                <form id="form-create-home">
                    <label> Your home name <br />
                        <input value={this.state.homename} type="text" onChange={this.fillName} /> <br />
                    </label>
                    <button onClick={this.handleClick}>Continue</button> <br/>
                    invite roomies (send the link below to your roommates)
                    <div className="link">
                       { this.state.homeid!=='' &&  <p>http://www.roomies.com/join/{this.state.homeid}</p> }
                    </div>

                </form>
            </div>
        )
    }
}

export default CreateHome;