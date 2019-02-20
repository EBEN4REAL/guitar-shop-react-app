import {
    GET_PRODUCTS_BY_ARRIVAL,
    GET_PRODUCTS_BY_SALE,
    GET_BRANDS,
    GET_WOODS
   } from '../../../store/actions/types';


const  rootReducer =  (state={} , action) => {
    
   switch(action.type){
          case GET_PRODUCTS_BY_ARRIVAL:
               return  {...state, byArrival: action.payload};
          case GET_PRODUCTS_BY_SALE:
               return {...state, bySale: action.payload}
          case GET_BRANDS:
               return {...state, get_brands: action.payload} 
          case GET_WOODS:
                return {...state, get_woods: action.payload} 
          default:
               return state;
   }
}
export default rootReducer;