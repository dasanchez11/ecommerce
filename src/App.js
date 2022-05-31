import React, {lazy, Suspense} from 'react';
import { GlobalStyle } from './global.styles';

// Pages
// import HomePage from './Pages/Homepage';
// import ShopPage from './Pages/Shop/Shop';
// import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up/sign-in-and-sign-up.jsx';
// import CheckoutPage from './Pages/Checkout/checkout';
import Spinner from './Components/spinner/spinner.component';
// import ErrorBoundary from './Components/error-boundary/error-boundary.component'

import {Route,Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'


import {selectCurrentUser} from './redux/user/user.selector'
import {checkUserSession} from './redux/user/user.actions';

// Components
import Header from './Components/header/header'

// Add collections to firebase
// import {selectCollectionsForPreview} from './redux/shop/shop.selectors'


// ADD REACT LAZY IMPORTS 
const HomePage = lazy(()=> import('./Pages/Homepage' ))
const ShopPage = lazy(()=> import('./Pages/Shop/Shop'))
const CheckoutPage = lazy(()=> import('./Pages/Checkout/checkout'))
const SignInAndSignUpPage = lazy(()=> import('./Pages/Sign-in-and-sign-up/sign-in-and-sign-up.jsx'))




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
        
          <Suspense fallback={<Spinner></Spinner>}>
            <Route exact path='/' component={HomePage} /> 
            <Route  path='/shop' component={ShopPage} />
            <Route  exact path='/checkout' component={CheckoutPage} />
            <Route  exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)} />
          </Suspense>
      
         
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
