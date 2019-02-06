import React from 'react';
import Button from '../utils/Button';

const RegisterLogin = (props) => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customers</h1>
                        <p>Some Content</p>
                        <Button
                            type="default"
                            title="Create an account"
                            LinkTo="/register"
                            addStyles={{ 
                                margin: '10px 0 0 0'
                             }}
                        />
                    </div>
                    <div className="right">
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterLogin;