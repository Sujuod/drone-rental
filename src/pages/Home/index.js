import React, { Component } from 'react';
import Station from './components/Station';
import data from 'assets/data/quads.json';
import DronesList from './components/DronesList';
import Logout from './components/Logout';
import { connect } from 'react-redux';
import CountDown from './components/CountDown';
import { setRentedDrone, getRentedDrone, removeRentedDrone } from 'actions/drone.actions';
import { notify } from "common/Notify.service";
import { Notify } from "common/Notify";
import { saveRentedDrone, removeRentedDroneFromStorage } from 'utilities/droneStorage';
import { isUserBanned } from 'utilities/user';

const INITIAL_STATE = {
    stations: {
        station1: [],
        station2: [],
        station3: [],
    },
    selectedStation: 1
}

class Home extends Component {
    state = { ...INITIAL_STATE };

    componentDidMount = () => {
        const stations = {
            station1: [],
            station2: [],
            station3: [],
        };
        let stationNum = 1;
        data.quads.forEach(item => {
            stations[`station${stationNum}`].push(item);
            if (stationNum === 3) {
                stationNum = 1
            } else {
                stationNum++;
            }
        });
        this.setState({ stations: { ...stations } });
        this.props.getRentedDrone();
    }

    onSelectStation = (stationNumber) => {
        this.setState({
            selectedStation: stationNumber
        })
    }

    calculateRemainingTime = () => {
        const { rentedDrone: { time, maxFlightTime } } = this.props;
        const diff = Date.now() - time;
        const minutes = Math.round(((diff % 86400000) % 3600000) / 60000);
        const parsedFlightTime = parseInt(maxFlightTime);
        const remainingTime = parsedFlightTime - minutes;
        return remainingTime >= 0 ? remainingTime : 0;
    }

    onRentClick = (drone) => {
        if (isUserBanned()) {
            notify.show("You are Banned from renting 🤚🏽", "danger");
            return;
        }
        if (this.props.rentedDrone) {
            notify.show("You are already renting a drone", "danger");
        } else {
            saveRentedDrone(drone);
            this.props.setRentedDrone(drone);
        }
    }

    componentWillUnmount = () => {
        this.props.removeRentedDrone();
    }

    returnDrone = () => {
        debugger
        removeRentedDroneFromStorage();
        this.props.removeRentedDrone();

    }
    render() {
        const { selectedStation, stations } = this.state;
        const { rentedDrone } = this.props;

        return (
            <>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand" href='/home'>Drones Rental</a>
                    <Logout />
                </nav>
                {rentedDrone && <CountDown minutes={this.calculateRemainingTime()} onReturnDrone={this.returnDrone} />}
                <div style={notifyStyle}><Notify /></div>
                <div className="d-flex container-fluid" >
                    <div className="d-flex flex-column mr-4 w-25">
                        {Object.keys(stations).map((item, index) => {
                            return (
                                <Station
                                    key={index + 1}
                                    onSelect={this.onSelectStation}
                                    stationNumebr={index + 1}
                                    selected={index + 1 === selectedStation}
                                />)
                        })
                        }
                    </div>
                    <div className="w-75">
                        <DronesList list={stations[`station${selectedStation}`]} onRentClick={this.onRentClick} />
                    </div>
                </div>
            </>);
    }
}

const mapStateToProps = ({ drone: { rentedDrone } }) => {
    return {
        rentedDrone
    }
}

const mapDispatchToProps = (dispatch) => ({
    setRentedDrone: (item) => dispatch(setRentedDrone(item)),
    getRentedDrone: () => dispatch(getRentedDrone()),
    removeRentedDrone: () => dispatch(removeRentedDrone())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const notifyStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    zIndex: '10'
}