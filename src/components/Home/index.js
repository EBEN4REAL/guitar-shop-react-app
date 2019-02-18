import React , {Component} from 'react';
import {connect} from 'react-redux';

import {getProductsBySale, getProductsBySale} from '../../store/actions/product_actions/product_actions';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';



class index extends Component {
    render(){
        return(
            <div>
                <HomeSlider />
                <HomePromotion />
            </div>
        )
    }
}
export default index;