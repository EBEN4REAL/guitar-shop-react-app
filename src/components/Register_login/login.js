import React , {component, Component} from 'react';
import {connect} from 'react-redux';
import FormField from '../utils/Form/FormField';

 class Login extends Component {

    state = {
        formError:  false,
        formSuccess: '',
        formData: {
            email: {
                elementType: 'input',
                value: '',
                elementConfig: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
             password: {
                 elementType: 'input',
                 value: '',
                 elementConfig: {
                     name: 'password',
                     type: 'password',
                     placeholder: 'Enter your email'
                 },
                 validation: {
                     required: true,
                     email: true
                 },
                 valid: false,
                 touched: false,
                 validationMessage: ''
             }
        }
    }
    updateForm = () => {

    }

    submiForm = () => {

    }
     render(){
         return (
             <div className="signin_wrapper">
                <form onSubmit={(e) => this.submiForm(e)}>
                    <FormField 
                        id='email'
                        formData={this.state.formData}
                        changed={(e) => this.updateForm(e)}
                    />
                </form>
             </div>
         )
     }
 }

 export default connect()(Login);