import React , {Component} from 'react';
import {connect} from 'react-redux';

import {getProductsByArrival, getProductsBySale} from '../../store/actions/product_actions/product_actions';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';
import CardBlock from '../../components/utils/CardBlock';



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
                    // list={this.props.productsBySales}
                    title={'Best Selling Guitars'} 
                />
                <HomePromotion />
            </div>
        )
    }
}
function mapStateToProps (state){
    return  {
        productsByArrival: state,
        productsBySales: state

    }
}
 export default connect(mapStateToProps)(Home);
