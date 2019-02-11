import React, {Component} from 'react';
import {connect} from 'react-redux';
import {auth} from '../store/actions/user_actions/user_actions';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Auth = (component, boolean, adminRoute = null) => {
    class AuthenticationCheck extends Component {
        state = {
            loading: false
        }
        render(){
            if(this.state.loading){
                return (
                    <div className="main_loader">
                        <CircularProgress style={{ color: "#2196f3" }}></CircularProgress>
                    </div>
                )
            }
            return (
                <component />
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


