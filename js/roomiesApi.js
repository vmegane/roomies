const api = 'https://roomies-80535.firebaseio.com'

const user = firebase.auth().currentUser;

export const createUser = (email, password) => {
    let newUser; 
    const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
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
            newUser = {
                userID: this.state.userID,
                name: this.state.name,
                email: this.state.email
            };
        })
        .then(() => {
            fetch(`${api}/users/${this.state.userID}.json`,
            {
                method: "PUT",
                body: JSON.stringify(newUser)
            })
        })
        .catch(error => console.log(error.message))
}



export const deleteUser = (user) => {
    user.delete()
    .then(() => console.log('user account deleted'))
    .then( (user) => 
        fetch(`${api}/users/${user.uid}.json`, {
            method: "DELETE"
        }))
    .catch(function(error) {
        console.log('error', error)
    });
}