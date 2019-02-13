import React , {Component} from 'react';

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