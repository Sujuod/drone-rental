import React from 'react'
import { isDroneRented } from 'utilities/droneStorage';

const rentBtnStyle = {
    fontWeight: '700',
    background: '#690513',
    color: 'white'
}

const Drone = ({ info, onRentClick }) => {
    const rent = () => {
        onRentClick(info);
    }

    return (
        <div className=" col-md-4 col-sm-6" >
            <div className="card mt-3" style={cardStyle}>
                <div className="text-center">
                    <img className="card-img-top w-50" src={require(`assets/images/${info.manufacturer}.jpg`)} alt="Card name" />
                </div>
                <div className="card-body text-center">
                    <div className="card-text">
                        <h5 className="card-title">{info.model}</h5>
                        <ul className="list-group">
                            <li className="list-group-item">Manufacturer : {info.manufacturer}</li>
                            <li className="list-group-item">Max Flight Time : {info.maxFlightTime}</li>
                            <button type="btn" className="list-group-item list-group-item-action" onClick={rent} style={rentBtnStyle} >Rent</button>
                        </ul>
                    </div>
                </div>
                {isDroneRented(info.model) && <div style={ifRented}>RENTED</div>}
            </div>
        </div>
    )
}
export default Drone;

const cardStyle = {
    position: 'relative'
}

const ifRented = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    background: 'black',
    opacity: '0.7',
    color: 'white',
    fontSize: '60px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
}