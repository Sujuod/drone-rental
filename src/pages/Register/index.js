import React, { Component } from "react";
import { register } from "utilities/user";
import { Link } from "react-router-dom";
import { Notify } from "common/Notify";
import { notify } from "common/Notify.service";
import LoginRegisterLayout from "common/LoginRegisterLayout";

export default class Register extends Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    submitted: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    this.setState(
      {
        submitted: true
      },
      () => {
        if (this.validateRegistrationForm()) {
          debugger
          this.registerUser();
        }
      }
    );
  };

  validateRegistrationForm = () => {
    debugger
    const { submitted, ...userForm } = this.state;
    const res = Object.keys(userForm).every(val => {
      return userForm[val]
    });
    return res;
  };

  registerUser = () => {
    const { submitted, ...userForm } = this.state;

    const status = register(userForm);
    if (!status) {
      notify.show("Email is already registered.", "danger");
    } else {
      this.props.history.push('/home');
    }
  };

  render() {
    const { email, firstName, lastName, phoneNumber, submitted } = this.state;
    return (
      <LoginRegisterLayout title="Register">
        <form>
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
          <div
            className={
              "form-group" + (submitted && !firstName ? " has-error" : "")
            }
          >
            <input
              type="text"
              name="firstName"
              value={firstName}
              className="form-control"
              placeholder="First Name"
              onChange={this.handleChange}
            />
            {submitted && !firstName && (
              <div className="help-block text-danger">
                First Name is required
              </div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !lastName ? " has-error" : "")
            }
          >
            <input
              type="text"
              name="lastName"
              value={lastName}
              className="form-control"
              placeholder="Last Name"
              onChange={this.handleChange}
            />
            {submitted && !lastName && (
              <div className="help-block text-danger">
                Last Name is required
              </div>
            )}
          </div>
          <div
            className={
              "form-group" + (submitted && !phoneNumber ? " has-error" : "")
            }
          >
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              className="form-control"
              placeholder="Phone Number"
              onChange={this.handleChange}
            />
            {submitted && !phoneNumber && (
              <div className="help-block text-danger">
                Phone Number is required
              </div>
            )}
          </div>
          <div className="form-group">
            <button
              className="btn btn-success btn-block"
              type="button"
              onClick={this.handleSubmit}
            >
              Register
            </button>
          </div>
          <span className="center">
            <Link to="/login">Already registered?</Link>
          </span>
          <Notify />
        </form>
      </LoginRegisterLayout>
    );
  }
}
