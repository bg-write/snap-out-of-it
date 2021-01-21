import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import "./Login.css";

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      this.updateMessage(err.message);
    }
  };

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    const { email, pw } = this.state;
    return (
      <main className="Login">

        <div className="logo-container">
          <img className="logo-pic" src="/images/logo.jpg" alt="" />
        </div>

<div className="brand-container">
        <h1 className="Brand-name">Snap Out Of It!</h1>
        </div>
        
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <h3 className="login-text h2">Log In</h3>
          <input
            className="form-control form-control-sm"
            placeholder="Email..."
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <label htmlFor="email"></label>
          <input
            className="form-control form-control-sm"
            placeholder="Password..."
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
          />
          <label htmlFor="password"></label>
          <button className="buttons btn btn-light">Log In</button>
          <Link className="buttons btn btn-light" to="/">
            Cancel
          </Link>
        </form>
        <p>{this.state.message}</p>
        <div className="space"></div>
      </main>
    );
  }
}

export default LoginPage;
