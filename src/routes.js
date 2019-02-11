import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Layout from './hoc/Layout';
import RegisterLogin from  './components/Register_login';
import Register from './components/Register_login/register';
import UserDashboard from './components/User';


const Routes = () => {
  return (
    <Layout>
      {/* <Switch> */}
        <Route path="/user/dashboard" exact component={UserDashboard} />

        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Home} />
        <Route path="/register_login" exact component={RegisterLogin} />
      {/* </Switch> */}
    </Layout>
    
  )
}


  

export default Routes;
