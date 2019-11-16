import { getDroneforCurrentUser } from 'utilities/droneStorage';
import { SET_RENTED_DRONE, GET_RENTED_DRONE, REMOVE_RENTED_DRONE } from 'actions/types';
import { getLoggedInUser } from 'utilities/user';

export const initialState = { rentedDrone: null };

const droneReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_RENTED_DRONE:
            return { rentedDrone: { ...payload, time: Date.now(), user: getLoggedInUser() } };
        case GET_RENTED_DRONE:
            return { rentedDrone: getDroneforCurrentUser() || null };
        case REMOVE_RENTED_DRONE:
            return { rentedDrone: null };
        default:
            return state

    }
};

export default droneReducer;