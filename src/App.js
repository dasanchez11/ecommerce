import React from 'react';
import './App.css';

// Pages
import HomePage from './Pages/Homepage';
import ShopPage from './Pages/Shop/Shop'
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up/sign-in-and-sign-up.jsx'
import {Route,Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {auth,createUserProfileDocument} from './Firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions';

// Components
import Header from './Components/header/header'


class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
