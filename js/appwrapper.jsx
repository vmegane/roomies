import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import LoginWrapper from './loginwrapper.jsx';
import Nav from './navigation.jsx';
import Latest from './latest.jsx';
import Fridge from './fridge.jsx';
import Home from './home.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import SignupWrapper from './signupwrapper.jsx';
import User from './user.jsx';
import CreateHome from './createhome.jsx';


class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin: false,
            currentUser: {},
            signupopen: false, 
            userData: {}
        }
        
    }
    
    componentWillMount() {
        this.watchAuthState();
    }

    componentDidUpdate() {
        if (this.state.currentUser!={}) {
            fetch(`https://roomies-80535.firebaseio.com/users/${this.state.userId}.json`)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    userData: response
                })
            })
        } 
    }



    manageLogin = (loginstate) => {
        this.setState({
            loggedin: loginstate
        })
    }
    manageSignup = (issignupopen) => {
        this.setState({
            signupopen: issignupopen
        })
    }

    watchAuthState() {
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                this.setState({
                    currentUser: firebaseUser,
                    loggedin: true,
                    userId: firebaseUser.uid
                })
                console.log('watcher: user loggedin: ', firebaseUser.uid)
            } else {
                this.setState({
                    currentUser: null,
                    loggedin: false
                })
                console.log('not logged in')
            }
        })
    }

    render() {
        if (this.state.loggedin === true) {
            return (
                <HashRouter>
                    <div>
                        <Header />
                        <LoginWrapper
                            manageLogin={this.manageLogin}
                            isLoggedIn={this.state.loggedin}
                            userName={this.state.userData.name}
                        />
                        <Nav />
                        <Switch>
                            <Route exact path='/fridge' component={Fridge} />
                            <Route exact path='/' component={Latest} />
                            <Route path='/home' component={Home} />
                            <Route path='/user' component={User} />
                            <Route path='/createhome' component={CreateHome}/>


                        </Switch>
                        <Footer />
                    </div>
                </HashRouter>
            )
        } else {
            return (
                <HashRouter>
                    <div>
                        <Header />
                        <Switch>
<div>
{ this.state.signupopen===false && <div> <h2>Sign in <span> <Link to='/signup'> or create account</Link></span></h2>
                        </div>}
                                <Route exact path='/' render={() =>  <LoginWrapper
                                    manageLogin={this.manageLogin}
                                    isLoggedIn={this.state.loggedin}
                            /> }/>
                                <Route path='/signup' render={() => <SignupWrapper 
                                manageLoggin={this.manageLogin}
                                manageSignup={this.manageSignup}
                                />} />
</div>
                           
                        </Switch>
                        <Footer />
                    </div>
                </HashRouter>
            )

        }

    }
}

export default AppWrapper;