import React from 'react';
import ReactDOM from 'react-dom';

class SignupWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '@',
            password: '',
            userID: '',
            name: ''
        }
        this.props.manageSignup(true)
    }

    
    fillName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    fillEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    fillPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    completeSignup = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        const auth = firebase.auth();
        const user = auth.currentUser;
        let newUser; 
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise
            .then(() => {
                this.setState({
                    loggedin: true,
                    userID: user.uid
                })
                console.log('created & signedin ', this.state.userID)
            }).then(() => {
                user.updateProfile({displayName: this.state.name});
            }) 
            .then(() => {
                console.log(this.state);
                newUser = {
                    userID: this.state.userID,
                    name: this.state.name,
                    email: this.state.email
                };
            })
            .then(() => {
                fetch(`https://roomies-80535.firebaseio.com/users/${this.state.userID}.json`,
                    {
                        method: "PUT",
                        body: JSON.stringify(newUser)
                    }
                )
            }).then( ()=> {
                this.props.manageLoggin();
            })
            .catch(error => console.log(error.message))
     }


    render() {
        return (
            <div>
                <h2>Create Account</h2>
                <form>
                    <label>Name
                        <input type="text" value={this.state.name} onChange={this.fillName} /></label>
                    <label>e-mail
                        <input type="email" value={this.state.email} onChange={this.fillEmail} /></label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.fillPassword} /></label>
                    
                    <input type="submit" value="sign up" onClick={this.completeSignup} />
                </form>
            </div>
        )
    }
}

export default SignupWrapper;