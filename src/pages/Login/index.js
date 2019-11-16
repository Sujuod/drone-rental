import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "utilities/user";
import { notify } from "common/Notify.service";
import { Notify } from "common/Notify";
import LoginRegisterLayout from "common/LoginRegisterLayout";

export default class Login extends Component {
  state = {
    email: "",
    submitted: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const { email } = this.state;
    const { history } = this.props;

    this.setState(
      {
        submitted: true
      },
      () => {
        if (email) {
          if (!login(email)) {
            notify.show("This email is not registered", "danger");
          } else {
            history.push('/home');
          }
        }
      }
    );
  };

  render() {
    const { email, submitted } = this.state;
    return (
      <LoginRegisterLayout title="Login">
        <form className="mt-2 w-100">
          <div
            className={"form-group" + (submitted && !email ? " has-error" : "")}
          >
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              placeholder="Email"
              onChange={this.handleChange}
            />
            {submitted && !email && (
              <div className="help-block text-danger">Email is required</div>
            )}
          </div>
          <div className="form-group text-center">
            <button
              className="btn btn-success btn-block"
              type="button"
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </div>
          <span className="center">
            <Link to="/register">Register New Account</Link>
          </span>
          <Notify />
        </form>

      </LoginRegisterLayout>
    );
  }
}
