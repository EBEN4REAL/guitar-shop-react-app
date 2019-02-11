import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Layout from './hoc/Layout';
import RegisterLogin from  './components/Register_login';
import Register from './components/Register_login/register';
import UserDashboard from './components/User';
import Auth from './hoc/auth'


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={Auth(UserDashboard)} />

        <Route path="/register" exact component={Auth(Register)} />
        <Route path="/" exact component={Auth(Home)} />
        <Route path="/register_login" exact component={Auth(RegisterLogin)} />
      </Switch>
    </Layout>
    
  )
}


  

export default Routes;
