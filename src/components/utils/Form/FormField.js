import React from 'react';

const FormField = ({formData, changed, id}) => {

    let formTemplate = null;
    switch (formData.elementType) {
        case 'input':
            formTemplate = <input 
                {...formData.elementConfig}
                value={formData.value}
                onBlur={(event) => changed({event, id, blur:true})}
                onChange={(event) => changed({event,id})}
                />
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