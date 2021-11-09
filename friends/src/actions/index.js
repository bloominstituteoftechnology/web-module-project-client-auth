export const FETCH_START = "FETCH_START";
export const SET_FRIENDS = "FETCH_FRIENDS";

export const fetchStart = () => {
    return({type: FETCH_START});
}
export const setFriends = (friends) => {
    return({type: SET_FRIENDS, payload:friends});
}