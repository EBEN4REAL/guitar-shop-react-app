import React , {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    state = {
        page: [
            {
                name: "Home",
                linkTo: '/',
                public: true
            },
            {
                name: "Guitars",
                linkTo: '/shop',
                public: true
            }
        ],
        user: [
            {
                name: "My Cart",
                linkTo: '/user/cart',
                public: false
            },
            {
                name: "My Account",
                linkTo: '/user/cart',
                public: false
            },
            {
                name: "Log in",
                linkTo: '/register_login',
                public: true
            },
            {
                name: "Log iooututn",
                linkTo: '/user_logout',
                public: false
            }
        ]
    }
    render(){
        return (
            <header className="bck_b_light">
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            Waves
                        </div>
                    </div>
                     <div className="right">
                        <div className="top">
                            LINKS
                        </div>
                         <div className="bottom">
                            LINKS
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;