import React from 'react';
import {Component} from 'react';

class Layout extends Component {
    render(){
        return (
            <div className="page_container">
                {this.props.children}
            </div>
        )
    }
}

export default Layout;