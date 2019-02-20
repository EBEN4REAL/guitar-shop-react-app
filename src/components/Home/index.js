import React , {Component} from 'react';
import {connect} from 'react-redux';

import {getProductsByArrival, getProductsBySale} from '../../store/actions/product_actions/productActions';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';
import CardBlock from '../../components/utils/cardBlock';



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
                <CardBlock
                    list={this.props.products.bySale}
                    title={'Best Selling Guitars'} 
                />
                <HomePromotion />
            </div>
        )
    }
}
const  mapStateToProps = (state) => {
    return {
        products: state.products
    }
}


 export default connect(mapStateToProps)(Home);
