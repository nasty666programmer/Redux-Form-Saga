import {CREATE_POST, FETCH_POST} from './types';

const initialState = {
    post:[],
    fetchPost:[]
}

const postReducer = (state=initialState,action) => {
    switch(action.type) {
        case CREATE_POST:
            return {...state,post:state.post.concat([action.payload])}
            break;
        case FETCH_POST:
            return {...state, fetchPost:action.payload}
        default: return state
    }
}

export default postReducer;