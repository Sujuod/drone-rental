import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getFirstName } from 'utilities/user';

export default class Logout extends Component {
    logout = () => {
        localStorage.removeItem("loggedin")
    }
    render() {
        return (
            <Link to="/login" className="btn btn-light ml-auto" onClick={this.logout}>
                Logout ({getFirstName()})
            </Link>
        )
    }
}