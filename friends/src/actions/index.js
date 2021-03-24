import { axiosWithAuth } from './../utils/axiosWithAuth';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_NEW_FRIEND = 'ADD_NEW_FRIEND';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_FRIENDS_START })
    axiosWithAuth
      .get('/api/friends')
      .then((res) => {
        // console.log(res.data)
        dispatch({
          type: FETCH_SUCCESS, payload: res.data, id: Date.now()
        })
      })
      .catch((err) => {
        dispatch({
          type: FETCH_FAILURE, payload: err.message
        })
      })
  }
}
  
export const addNewFriend = (friend) =>  {
  return (dispatch) => {
    axiosWithAuth.post('/api/frends', friend)
      .then((res) => {
     
        dispatch({ type: FETCH_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({
          type: FETCH_FAILURE, payload: err.res.data
        })
      })
  }
}

export const setError = () => {
  return (dispatch)=> dispatch({type: SET_ERROR})
}