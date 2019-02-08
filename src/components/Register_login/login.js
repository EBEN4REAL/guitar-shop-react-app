import React , {Component} from 'react';
import {connect} from 'react-redux';
import FormField from '../utils/Form/FormField';
import  {update} from '../utils/Form/FormActions';

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
                     placeholder: 'Enter your password'
                 },
                 validation: {
                     required: true,
                     password: true
                 },
                 valid: false,
                 touched: false,
                 validationMessage: ''
             }
        }
    }
    updateForm = (element) => {
        console.log(element);
        const newFormdata = update(element , this.state.formData, 'login');
        console.log(newFormdata);
        this.setState({
            formError: false,
            formData: newFormdata
        })
    }

    submiForm = () => {

    }
     render(){
         return (
             <div className="signin_wrapper">
                <form onSubmit={(event) => this.submiForm(event)}>
                    <FormField 
                        id={'email'}
                        formData={this.state.formData.email}
                        changed={(element) => this.updateForm(element)}
                    />
                    <FormField 
                        id={'password'}
                        formData={this.state.formData.password}
                        changed={(element) => this.updateForm(element)}
                    />
                </form>
             </div>
         )
     }
 }

 export default connect()(Login);