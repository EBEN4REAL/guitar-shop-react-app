import React from 'react';

const FormField = ({formData, changed, id}) => {
    const showError = () => {

        let errorMessage = null;

        if(formData.validation && !formData.valid){
            console.log(formData);
            console.log(formData.validationMessage);
            errorMessage = (
                <div className="error_label">
                    {formData.validationMessage}
                </div>
            )
        }

        return errorMessage
    }
        

    let formTemplate = null;
    switch (formData.elementType) {
        case 'input':
            formTemplate = <input 
                {...formData.elementConfig}
                value={formData.value}
                onBlur={(event) => changed({event, id, blur:true})}
                onChange={(event) => changed({event,id})}
                />
                {showError()}
            break;
    
        default:
            break;
    }
    return (
        <div>
            {formTemplate}
        </div>
    )
}

export default FormField;