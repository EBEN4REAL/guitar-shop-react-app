import React from 'react';
import Link from 'react-router-dom'


const button = (props) => {

    const buttons = () => {
        let template = '';
        switch(props.type){
            case "default": 
                template = <Link></Link>
                break;
            default:
                template = '';
        }
    }
    return (
        <div className="my_link">
            {button()}
        </div>
    )
}
export default Button;