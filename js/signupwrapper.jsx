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
        console.log('1', user)
        let newUser; 
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise
            .then((r) => {
            console.log('r', r.user.uid);
                
                this.setState({
                    loggedin: true,
                    userID: r.user.uid
                })
            })
            .then(() => {
                console.log('create new user');
                    newUser = {
                    userID: this.state.userID,
                    name: this.state.name,
                    email: this.state.email
                };
                console.log('created', newUser);

            })
            .then(() => {
                fetch(`https://roomies-80535.firebaseio.com/users/${this.state.userID}.json`,
                    {
                        method: "PUT",
                        body: JSON.stringify(newUser)
                    }
                )
            })
            .then( ()=> {
                console.log('switch to logged in');
                this.props.manageLogin(true);
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