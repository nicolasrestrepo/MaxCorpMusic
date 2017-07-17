import React, { Component } from 'react'
import { firebaseApp } from '../services/firebase'

class App extends Component{

    signOut(){
        firebaseApp.auth().signOut();
    }

    render(){
        return(          
            <div>
            app
            <button 
            className="btn btn-danger"
            onClick={() => this.signOut()}
            > Sign Out</button>
            </div>
        )
    }
}

export default App