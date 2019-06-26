import React from 'react';
import './sign-in.css';

class Signin extends React.Component {
  saveAuthTokenID = (token) => {
    window.sessionStorage.setItem('token', token);
  }

  onSignIn = () => {
    const { signInEmail, signInPassword, changeRoute } = this.props;
     fetch('http://localhost:3000/signin', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             email: signInEmail,
             password: signInPassword
           })
         })
         .then(response => response.json())
         .then(data => {
           if (data.userId) {
             this.saveAuthTokenID(data.token);
             fetch(`http://localhost:3000/placeholder/${data.userId}`, {
               method: 'get',
               headers: {
                 'Content-Type': 'application/json',
                 'Authorization': data.token
               }
             }).then(response => response.json())
            .then(data =>{ if(data); changeRoute('placeholder')})
          }}).catch(err => console.log(err))
        }

  render(){
    const { onSignInEmailChange, onSignInPasswordChange } = this.props;
    return(
      <div>
      <div className="text-center">
          <h1 className="h3 mb-3 font-weight-normal">Ohaii Sign In</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required=""
              autoFocus=""
              onChange={onSignInEmailChange}
            />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
            onChange={onSignInPasswordChange}
          />
      </div>
      <button
        onClick={this.onSignIn}
        className="btn btn-lg btn-primary btn-block"
      >Sign In</button>
      </div>
    )
  }
}

export default Signin;
