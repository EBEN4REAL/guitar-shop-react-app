import React, {Component} from 'react';
import {connect} from 'react-redux';
import {auth} from '../store/actions/user_actions/user_actions';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Auth = (component, boolean, adminRoute = null) => {
    class AuthenticationCheck extends Component {
        state = {
            loading: true
        }
        render(){
            if(this.state.loading){
                return (
                    <div className="main_loader">
                    
                    </div>
                )
            }
            return (
                <div>
    
                </div>
            )
        }
    }
    function  mapStateToProps(state){
        return {
            user: state.user
        }
    }
    return connect(mapStateToProps)(AuthenticationCheck);
}


