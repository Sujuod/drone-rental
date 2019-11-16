import React from 'react';
import Drone from './Drone';

const DronesList = ({ list, onRentClick }) => {
    return (
        <div className="row">
            {list.map((item, index) => (<Drone key={index} onRentClick={onRentClick} info={item} />))}
        </div>
    );
}

export default DronesList;
