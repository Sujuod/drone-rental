import { getLoggedInUser } from './user';

export const getDrones = () => localStorage.getItem("rentedDrones") ? JSON.parse(localStorage.getItem("rentedDrones")) : [];


export const saveRentedDrone = ({ model: drone, maxFlightTime }) => {
    const droneList = getDrones();
    const user = getLoggedInUser();
    droneList.push({ drone, user, maxFlightTime, time: Date.now() });
    localStorage.setItem("rentedDrones", JSON.stringify(droneList));
}

export const getDroneforCurrentUser = () => {
    const user = getLoggedInUser();
    const droneList = getDrones();
    const res = droneList.find(drone => drone.user === user);
    return res;
}

export const isDroneRented = (drone) => {
    const droneList = getDrones();
    return droneList.find(item => item.drone === drone)
}


export const removeRentedDroneFromStorage = () => {
    const droneList = getDrones();
    const user = getLoggedInUser();
    const filteredList = droneList.filter(drone => drone.user !== user);
    localStorage.setItem("rentedDrones", JSON.stringify(filteredList));
}