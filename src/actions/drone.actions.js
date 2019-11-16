import { SET_RENTED_DRONE, GET_RENTED_DRONE, REMOVE_RENTED_DRONE } from './types';

export const setRentedDrone = (drone) => ({
    type: SET_RENTED_DRONE,
    payload: drone
})

export const getRentedDrone = () => ({
    type: GET_RENTED_DRONE
})

export const removeRentedDrone = () => ({
    type: REMOVE_RENTED_DRONE
})


