import React from 'react';
import {Link} from 'react-router-dom'
// import { timingSafeEqual } from 'crypto';


const Button = (props) => {

    const buttons = () => {
        let template = '';
        switch(props.type){
            case "default": 
                template = <Link
                    className={!props.altClass ? 'link_default' : props.altClass}
                    to={props.linkTo}
                    >
                    {props.title}
                </Link>
                break;
            case "bag_link":
                template = 
                    <div className="bag_link" onClick={() => props.run_action()}>

                    </div>
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