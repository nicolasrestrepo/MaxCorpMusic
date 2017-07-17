import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/containers/app';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
//redux
import { Provider } from 'react-redux'
import { LoginUser } from './actions'
import store from './store'
//services
import { firebaseApp } from './services/firebase';
//components
import SignIn from './pages/containers/signIn.jsx';
import SignUp from './pages/containers/signUp.jsx';

const customHistory = createBrowserHistory()

firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        console.log('user has signed in or up', user);
        const { email } = user
        store.dispatch(LoginUser(email))
        customHistory.push('/app')
    }else{
        console.log('user has signed out or still needs to sign in')
        customHistory.replace('/sign-in')
    }

})


ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={customHistory}>
        <Switch>
            <Route path="/app" exact component={App}></Route>
            <Route path="/sign-in" exact component={SignIn}></Route>
            <Route path="/sign-up" exact component={SignUp}></Route>                
        </Switch>
    </Router>
  </Provider>  
    , document.getElementById('root')
)