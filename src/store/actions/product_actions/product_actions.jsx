import axios from 'axios';
import {GET_PRODUCTS_BY_SALE} from '../types';
import {GET_PRODUCTS_BY_ARRIVAL} from '../types';  

import {PRODUCT_SERVER}  from '../../../components/utils/misc';

export function getProductsByArrival (){
    // BY ARRIVAL
    // /articles?sortBY=createdAt&order=desc&limit=4

    // BY SALE
    // /articles?sortBy=sold&order=desc&limit=100&skip=5
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
    
}