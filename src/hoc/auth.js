import React, {Component} from 'react';
import {connect} from 'react-redux';
import {auth} from '../store/actions/user_actions/user_actions';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function (ComposedClass, reload, adminRoute = null)  {
    class AuthenticationCheck extends Component {
        state = {
            loading: false
        }
        componentDidMount() {
            this.props.dispatch(auth()).then(res => {
                console.log(this.props.user.user_data);
            })
        }
        render(){
            if(this.state.loading){
                return (
                    <div className="main_loader">
                        <CircularProgress style={{ color: "#2196f3" }} thickness={7}></CircularProgress>
                    </div>
                )
            }
            return (
                <ComposedClass {...this.props}  user={this.props.user}/>
            );
        }
    }
    function  mapStateToProps(state){
        return {
            user: state.user
        }
    }
    return connect(mapStateToProps)(AuthenticationCheck);
}


