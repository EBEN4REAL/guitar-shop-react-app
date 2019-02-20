import React, {Component}  from 'react';

class Card extends Component {
    render(){
        const props = this.props;
        return (
            <div className={`card_item_wrapper ${props.grid}`}>

            </div>
        )
    }
}
export default Card

