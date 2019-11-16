import { combineReducers } from 'redux';
import droneReducer from './drone.reducer';

const rootReducer = combineReducers({
    drone: droneReducer
});

export default rootReducer;