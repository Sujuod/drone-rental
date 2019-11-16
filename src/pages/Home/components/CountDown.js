import React, { Component } from 'react'
import { markUserAsBanned } from 'utilities/user';

export default class CountDown extends Component {
    state = {
        minutes: this.props.minutes,
        seconds: 0,
    }

    componentDidMount() {
        this.createTimer();
    }

    createTimer() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    markUserAsBanned();
                    this.props.onReturnDrone();
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }


    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div className="alert alert-danger" role="alert">
                {minutes === 0 && seconds === 0
                    ? <h5>You didn't return the drone, You are Banned from renting with us.</h5>
                    : <div className="row">
                        <h5><span role="img" aria-label="time">⌛️</span>
                            Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                        </h5>
                        <button className="btn btn-light ml-auto" onClick={this.props.onReturnDrone}>Return Drone</button>
                    </div>
                }
            </div>
        )
    }
}