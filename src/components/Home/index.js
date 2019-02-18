import React , {Component} from 'react';
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