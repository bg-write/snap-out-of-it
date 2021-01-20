import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <div>
        <h3 className="login-text h2">Sign Up</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="form-control form-control-sm"
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            className="form-control form-control-sm"
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            className="form-control form-control-sm"
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="confirm">Confirm Password</label>
          <input
            className="form-control form-control-sm"
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
          <br />
          <button
            className="buttons btn btn-light"
            disabled={this.isFormInvalid()}
          >
            Sign Up
          </button>

          <Link className="buttons btn btn-light" to="/">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

export default SignupForm;
