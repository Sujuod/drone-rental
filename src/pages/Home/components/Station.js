import React from 'react';

const Station = ({ stationNumebr, onSelect, selected }) => {
    const onStationClick = () => {
        onSelect(stationNumebr);
    }
    return (
        <div onClick={onStationClick} style={selected ? selectedStyle : {}} className='card mt-3 pt-4 pb-4 d-flex align-items-center'>
            <div className="card-body">
                Station  {stationNumebr}
            </div>
        </div>
    );
}

export default Station;

const selectedStyle = {
    backgroundColor: 'rgba(219, 227, 231, 0.83)',
    fontSize: '24px'
}