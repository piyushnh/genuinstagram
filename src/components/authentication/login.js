import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authenticateActions from '../../actions/authentication'


class Login extends Component {

  constructor(props){
    super(props)
    this.onLogin = this.onLogin.bind(this)
  }

  onLogin ()
  {
    this.props.googleLogin()
  }
  
  
  render() {
  

    return (

     <div className="notes_wrapper">
  <div className="cua">
    <div className="display_text">
      <span>Login/Sign Up</span>
    </div>

    <div className="row google_login" style={{marginLeft:'15%', marginRight:'25%'}}>
      <div className="col-md-3">
        <a className="btn btn-outline-dark google_login_button" role="button" style={{textTransform: 'none'}} onClick = {this.onLogin}>
          <img width="20px" style={{marginBottom:3 , marginRight:5}} alt="Google sign-in"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
          Login with Google
        </a>
      </div>
    </div>

  </div>

</div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    googleLogin: () => dispatch(authenticateActions.onGoogleLogin()),
    

  }
}


export default connect(null, mapDispatchToProps)(Login)
