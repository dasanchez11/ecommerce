import React from 'react';
import { GlobalStyle } from './global.styles';

// Pages
import HomePage from './Pages/Homepage';
import ShopPage from './Pages/Shop/Shop';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up/sign-in-and-sign-up.jsx';
import CheckoutPage from './Pages/Checkout/checkout';

import {Route,Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'


import {selectCurrentUser} from './redux/user/user.selector'
import {checkUserSession} from './redux/user/user.actions';

// Components
import Header from './Components/header/header'

// Add collections to firebase
// import {selectCollectionsForPreview} from './redux/shop/shop.selectors'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
   const {checkUserSession} = this.props;
   checkUserSession();
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  exact path='/checkout' component={CheckoutPage} />
          <Route  exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
