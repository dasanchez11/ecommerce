import React from 'react'
import FormInput from '../form-input/form-input'
import CustomButon from '../custom-button/custom-button'

// import {auth, createUserProfileDocument} from '../../Firebase/firebase.utils'
import './sign-up.scss'
import {signUpStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux'


class SignUp extends React.Component {
  constructor(){
    super();

    this.state = {
      displayName:'',
      email: '',
      password: '',
      confirmPassword:''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {signUpStart} = this.props
    const {displayName, email, password, confirmPassword} = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
      }
    signUpStart({displayName,email,password})
  };

  handleChange = event => {
    const {name,value} = event.target

    this.setState({[name]: value});
  };


  render(){
    const {displayName, email, password, confirmPassword} = this.state;
    return(
      <div className='sign-up'>
        <h2 className='title'> I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required>
          </FormInput>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required>
          </FormInput>
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required>
          </FormInput>
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required>
          </FormInput>
          <div className='buttons' >
            <CustomButon type ='submit'>Sign Up</CustomButon>
          </div>
        </form>

      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);
