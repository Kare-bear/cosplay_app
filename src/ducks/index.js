import { combineReducers } from 'redux';
import UserReducer from './users_reducer';
import ActiveUserReducer from './active_user_reducer';


const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers;