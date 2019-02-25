import React, {Component}  from 'react'
import PageTop from '../utils/page_top';

import { connect } from "react-redux";
import {getBrands, getWoods} from '../../store/actions/product_actions/productActions';
import CollapseCheckbox from '../utils/CollapseCheckBox';
import {frets, price} from '../utils/Form/fixedCategories';
import CollapseRadio from '../utils/CollapseRadio';

class Shop extends Component {
    state = {
        grid: '',
        limit: 6,
        skip:0,
        filters: {
            brands: [],
            frets: [],
            woods:[],
            price: []
        }
    }
    componentDidMount(){
        this.props.dispatch(getBrands()).then(res => {
            console.log(res.payload)
        });
        this.props.dispatch(getWoods()).then(res => {
            console.log(res.payload)
        });
    }
    handlePrice = (value) => {
        console.log(value);
        const data = price;
        let array = [];

        for(let key in data){
            if(data[key]._id === parseInt(value,10)){
                array = data[key].array
            }
        }
        return array;
    }
    handleFilters(filters, category){
        console.log("Filter");
        console.log(filters);
        const newFilters = {...this.state.filters}
        newFilters[category] = filters;

        if(category ==="price"){
            let priceValues = this.handlePrice(filters);
            newFilters[category] = priceValues;
        }

        this.setState({
            filters: newFilters
        })
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
                            <CollapseCheckbox 
                                initState={false}
                                title="Brands"
                                list={products.brands}
                                handleFilters={(filters) => this.handleFilters(filters,'brands')}
                            />
                             <CollapseCheckbox 
                                initState={false}
                                title="Frets"
                                list={frets}
                                handleFilters={(filters) => this.handleFilters(filters,'frets')}
                            />
                             <CollapseCheckbox 
                                initState={false}
                                title="Woods"
                                list={products.woods}
                                handleFilters={(filters) => this.handleFilters(filters,'woods')}
                            />
                            <CollapseRadio 
                                initState={true}
                                title="Price"
                                list={price}
                                handleFilters={(filters) => this.handleFilters(filters,'price')}
                            />
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