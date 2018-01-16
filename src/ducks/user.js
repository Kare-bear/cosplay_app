import axios from "axios";

const RETRIEVE_USER = "RETRIEVE_USER";
const UPDATE_NAME = "UPDATE_NAME";

export function updateUser(name, id){
    return{
        type: UPDATE_NAME,
        payload: axios
        .put('/api/name', { name, id })
        .then(response => response.data)
        .catch(console.log)
    };
}

export function retrieveUser(){
    return {
        type: RETRIEVE_USER,
        payload: axios
            .get("/api/me")
            .then(response => response.data)
            .catch(console.log)
    };
}

export const selectUser = (user) => {
    console.log("This is ", user.name,"'s","profile.");
    return{
        type:'USER_SELECTED',
        payload: user
    }
};

const initialState = {
    user: {},
    isLoading: false,
    didError: false
};

export default function user( state = initialState, action){
    switch( action.type ){
        case `${ RETRIEVE_USER}_PENDING`:
            return Object.assign( {}, state, { isLoading: true });

        case `${ RETRIEVE_USER}_FULFILLED`:
            return Object.assign( {}, state, {
                isLoading: false,
                user: action.payload
            });

        case `${ RETRIEVE_USER}_REJECTED`:
            return Object.assign( {}, state, {
                isLoading: false,
                didError: true
            });



        default:
            return state;
    }
}