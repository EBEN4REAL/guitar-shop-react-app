import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

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
                name: "Log out",
                linkTo: '/user_logout',
                public: false
            }
        ]
    }
    showLinks = (type) => {
        let list = [];

        if(this.props.user.user_data){
            type.forEach(item => {
                if(!this.props.user.user_data.isAuth){
                    if(item.public === true){
                        list.push(item);
                    }
                }else{
                    if(item.name !== 'Log in'){
                        list.push(item);
                    }
                }
            })
        }
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
                        {this.showLinks(this.state.user)}
                        </div>
                         <div className="bottom">
                            {this.showLinks(this.state.page)}
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);