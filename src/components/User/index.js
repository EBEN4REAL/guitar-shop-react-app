import React from 'react';
import UserLayout from '../../hoc/user';
import Button from '../utils/Button';
import {connect} from 'react-redux';

const  UserDashboard = (props) =>{

    console.log(props);
    return (
        <div>
            <UserLayout>
                <div className="user_nfo_panel">
                    <h1>User information</h1>
                    <div>
                        <span>Name: {props.user.user_data.name}</span>
                        <span>Last Name</span>
                        <span>Email</span>
                    </div>
                    <Button
                        type="default"
                        title="Edit acount Info"
                        linkTo="/user/user_profile"
                        >
                    
                    </Button>
                </div>
                <div className="user_nfo_panel">
                    <h1>Histroy purchases</h1>
                    <div className="user+product_block_wrapper">
                        History
                    </div>
                </div>
               
            </UserLayout>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         userData: state.user_data
//     }
// }

// export default connect(mapStateToProps)(UserDashboard);
export default UserDashboard;