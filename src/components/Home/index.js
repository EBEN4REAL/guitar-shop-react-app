import React , {Component} from 'react';
import {connect} from 'react-redux';

import {getProductsByArrival, getProductsBySale} from '../../store/actions/product_actions/product_actions';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';



class Home extends Component {
    componentDidMount(){
        this.props.dispatch(getProductsBySale());
    }
    render(){
        return(
            <div>
                <HomeSlider />
                <HomePromotion />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(Home);