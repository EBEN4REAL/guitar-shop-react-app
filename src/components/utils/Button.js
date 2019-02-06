import React from 'react';
import {Link} from 'react-router-dom'
import { timingSafeEqual } from 'crypto';


const Button = (props) => {

    const buttons = () => {
        let template = '';
        switch(props.type){
            case "default": 
                template = <Link
                    className="link_default"
                    to={props.linkTo}
                    >
                    {props.title}
                </Link>
                break;
            default:
                template = '';
        }

        return template;
    }
    return (
        <div className="my_link">
            {buttons()}
        </div>
    )
}
export default Button;