import React, { Component } from 'react'
import { firebaseApp } from '../../services/firebase'
import { connect } from 'react-redux'
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

const mapStateToProps = (state) =>{
    console.log('state in app', state)
    return {}
}

export default connect (mapStateToProps)(App)