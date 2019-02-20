import React, {Component}  from 'react'
import PageTop from '../utils/page_top';

import { connect } from "react-redux";
import {getBrands, getWoods} from '../../store/actions/product_actions/productActions';

class Shop extends Component {
    componentDidMount(){
        this.props.dispatch(getBrands()).then(res => console.log(res.payload));
    }
    
    render(){
        const products = this.props.products;
        return (
            <div>
                <PageTop 
                    title="Browse Products" />
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            Left
                        </div>
                        <div className="left">
                            Right
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(Shop)