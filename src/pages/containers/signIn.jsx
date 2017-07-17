import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../../services/firebase';

class SignIn extends Component {

    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn(){
        console.log('this.state', this.state)
        const { email, password } = this.state
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            this.setState({error})
        })
    }

    render() {
        return (
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="email"
                        type="text"
                        onChange={event => this.setState({email: event.target.value})}
                    />
                    <input
                        className="form-control"
                        placeholder="password"
                        type="password"
                        onChange={event => this.setState({password: event.target.value})}
                    />
                    <button 
                    className="btn btn-primary"
                    type="button"
                    onClick={() => this.signIn()}
                    >
                        signIn
                    </button>
                </div>
                <Link to="/sign-up">Sing Up</Link>
                <div>{this.state.error.message}</div>
            </div>
        )
    }
}

export default SignIn