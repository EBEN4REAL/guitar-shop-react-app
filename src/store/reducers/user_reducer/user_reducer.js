 import {
     LOGIN_USER,
     REGISTER_USER
    } from '../../../store/actions/types';


const  rootReducer =  (state={} , action) => {
    switch(action.type){
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload }
        case REGISTER_USER:
            return {...state, loginSuccess: action.payload }
        default:
            return state;
    }
}
export default rootReducer;