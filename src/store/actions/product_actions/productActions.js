import axios from 'axios';
import {GET_PRODUCTS_BY_SALE} from '../types';
import {GET_PRODUCTS_BY_ARRIVAL} from '../types';  
import {GET_BRANDS, GET_WOODS} from '../types';  

import {PRODUCT_SERVER}  from '../../../components/utils/misc';

export function getProductsByArrival (){
    // BY ARRIVAL
    // /articles?sortBY=createdAt&order=desc&limit=4

  
    const req = axios.get(`${PRODUCT_SERVER}articles?sortBy=createdAt&order=desc&limit=4`)
        .then(res => {
            return res.data;
        })
    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: req
    }
}

export function getProductsBySale (){
      // BY SALE
    // /articles?sortBy=sold&order=desc&limit=100&skip=5
    const req = axios.get(`${PRODUCT_SERVER}articles?sortBy=sold&order=desc&limit=4`)
        .then(res => {
            return res.data
        });
    return {
        type: GET_PRODUCTS_BY_SALE,
        payload: req
    }
}

// ///////////////////////////
//          CATEGORIES
// //////////////////////////

export const getBrands = () => {
    const req = axios.get(`${PRODUCT_SERVER}/get_brands`).then(res => res.data);

    return {
        type: GET_BRANDS,
        payload: req
    }
}
export const getWoods = () => {
    const req = axios.get(`${PRODUCT_SERVER}/woods`).then(res => res.data);

    return {
        type: GET_WOODS,
        payload: req
    }
}