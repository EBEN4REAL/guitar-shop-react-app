import React from 'react';

const FormField = (formData, changed, id) => {

    let formTemplate = null;
    switch (props.formData.elementType) {
        case 'input':
            formTemplate = <input 
                id={id} 
                {...formData.elementConfig}
                value={formData.value}
                onBlur={(e) => changed({e, id, blur:true})}
                onChange={(e) => changed({e,id})}
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