import React from 'react';
import UserLayout from '../../hoc/user';
import Button from '../utils/Button';

const  UserDashboard = () =>{
    return (
        <div>
            <UserLayout>
                <div className="user_nfo_panel">
                    <h1>User information</h1>
                    <div>
                        <span>Name</span>
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
                    <div>
                        
                    </div>
                </div>
               
            </UserLayout>
        </div>
    )
}

export default UserDashboard;