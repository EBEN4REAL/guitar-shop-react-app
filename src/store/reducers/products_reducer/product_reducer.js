import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_PRODUCTS_BY_SALE
   } from '../../../store/actions/types';


const  rootReducer =  (state={} , action) => {
   switch(action.type){
       case GET_PRODUCTS_BY_ARRIVAL:
           return {...state, loginSuccess: action.payload }
       case GET_PRODUCTS_BY_SALE:
           return {...state, loginSuccess: action.payload }
           return {...state}
       default:
           return state;
   }
}
export default rootReducer;