import { FETCH_START, SET_FRIENDS } from './../actions';

export const initialState = {
    isFetching: false,
    friends:[]
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
            isFetching:false
          });
        default:
            return state;
    }
}

export default reducer;