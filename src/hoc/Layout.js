import React from 'react';
import {Component} from 'react';
import Header from '../components/Header_footer/Header';

class Layout extends Component {
    render(){
        return (
            <div>
                <Header />
                 <div className="page_container">
                    {this.props.children}
                </div>
                Footer
            </div>
           
        )
    }
}

export default Layout;