import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_PRODUCTS_BY_SALE
   } from '../../../store/actions/types';


const  rootReducer =  (state={} , action) => {
   switch(action.type){
       case GET_PRODUCTS_BY_ARRIVAL:
            state = {...state, byArrival: action.payload};
            break;
        //    return {...state, byArrival: action.payload}
       case GET_PRODUCTS_BY_SALE:
        //    return {...state, bySale: action.payload}
        state = {...state, bySale: action.payload}
        break;
       default:
           break;
   }
   return state;
}
export default rootReducer;