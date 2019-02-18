import React , {Component} from 'react';
import {connect} from 'react-redux';

import {getProductsByArrival, getProductsBySale} from '../../store/actions/product_actions/product_actions';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';



class Home extends Component {
    componentDidMount(){
        this.props.dispatch(getProductsByArrival())
            .then(res => {
                console.log(res.payload);
            })
        this.props.dispatch(getProductsBySale())
            .then(res => {
                console.log(res.payload)
            })

        console.log(this.props);
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
        productsByArrival: state.byArrival,
        productsBySales: state.bySale

    }
}
export default connect(mapStateToProps)(Home);