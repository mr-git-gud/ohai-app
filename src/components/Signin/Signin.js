import React from "react";
import "../signin-register.css";

class Signin extends React.Component {
  componentDidMount() {
    const { changeRoute, setFormErrMsg, setSessionCredentials } = this.props;
    const token = window.sessionStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data && data.id) {
            fetch(`http://localhost:3000/townsquare/${data.id}`, {
              method: "get",
              headers: {
                "Content-Type": "application/json",
                Authorization: token
              }
            })
              .then(response => response.json())
              .then(user => {
                setSessionCredentials({ email: user.email, id: user._id });
                setFormErrMsg("");
                changeRoute("townsquare");
              })
              .catch(err => console.log(err));
          }
        });
    }
  }

  onSignIn = () => {
    const {
      signInEmail,
      signInPassword,
      changeRoute,
      setFormErrMsg,
      setSessionCredentials
    } = this.props;
    if (signInEmail.length && signInPassword.length) {
      fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: signInEmail,
          password: signInPassword
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data === "Invalid login credentials") {
            setFormErrMsg("Invalid login credentials");
          }
          if (data.userId) {
            window.sessionStorage.setItem("token", data.token);
            fetch(`http://localhost:3000/townsquare/${data.userId}`, {
              method: "get",
              headers: {
                "Content-Type": "application/json",
                Authorization: data.token
              }
            })
              .then(response => response.json())
              .then(user => {
                setSessionCredentials({ email: user.email, id: user._id });
                setFormErrMsg("");
                changeRoute("townsquare");
              });
          }
        })
        .catch(err => console.log(err));
    } else {
      setFormErrMsg("Complete the form");
    }
  };

  navigateToRegister = () => {
    const {
      onSignInEmailChange,
      onSignInPasswordChange,
      setFormErrMsg,
      setPassword,
      changeRoute
    } = this.props;
    const empty = { target: { value: "" } };
    onSignInEmailChange(empty);
    onSignInPasswordChange(empty);
    setPassword("");
    setFormErrMsg("");
    changeRoute("register");
  };

  render() {
    const {
      onSignInEmailChange,
      onSignInPasswordChange,
      formErrMsg
    } = this.props;
    return (
      <div className="container">
        <div className="text-center">
          <h1 className="h3 mb-3 font-weight-normal header-logo">PingIM</h1>
          <label className="form-err">
            {formErrMsg.length ? formErrMsg : ""}
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            autoFocus=""
            onChange={onSignInEmailChange}
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
            onChange={onSignInPasswordChange}
          />
        </div>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">
            <button
              onClick={this.onSignIn}
              className="btn btn-lg btn-primary btn-block signin"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                this.navigateToRegister();
              }}
              id="to-register"
              className="btn btn-lg btn-primary btn-block register"
            >
              Register
            </button>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
}

export default Signin;
