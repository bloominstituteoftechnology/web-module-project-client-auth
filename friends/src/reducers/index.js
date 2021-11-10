import { FETCH_START, SET_FRIENDS, LOG_IN, LOG_OUT } from './../actions';

export const initialState = {
    isFetching: false,
    friends:[],
    loggedIn:false
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case(FETCH_START):
          return({
            ...state,
            isFetching:true,
            friends:[]
          });
        case(SET_FRIENDS):
          return({
            ...state,
            friends: action.payload,
            isFetching:false,
            loggedIn:true
          });
        case(LOG_IN):
          return({
            ...state,
            loggedIn:true
          });
        case(LOG_OUT):
          console.log('log out reached')
          return({
            ...state,
            loggedIn:false
          });
        default:
            return state;
    }
}

export default reducer;