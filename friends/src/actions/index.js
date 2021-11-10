export const FETCH_START = "FETCH_START";
export const SET_FRIENDS = "FETCH_FRIENDS";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const fetchStart = () => {
    return({type: FETCH_START});
}
export const setFriends = (friends) => {
    return({type: SET_FRIENDS, payload:friends});
}

export const logIn = () => {
    return({type: LOG_IN});
}

export const logOut = () => {
    console.log('action reached')
    return({type: LOG_OUT});
}