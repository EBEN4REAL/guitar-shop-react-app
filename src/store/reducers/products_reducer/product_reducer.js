import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_PRODUCTS_BY_SALE
   } from '../../../store/actions/types';


const  rootReducer =  (state={} , action) => {
   switch(action.type){
       case GET_PRODUCTS_BY_ARRIVAL:
            state = {...state, byArrival: action.payload};
            break;
       case GET_PRODUCTS_BY_SALE:
            state = {...state, bySale: action.payload}
            break;
       default:
           break;
   }
   return state;
}
export default rootReducer;