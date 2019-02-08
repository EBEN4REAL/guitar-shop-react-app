

export const  validate = (element, formData=[]) => {
    let error = [true, ''];

    if(element.validation.required){
        const valid = element.value.trim() === '';
        const message = `${valid ? 'This field is required' : ''}`
    }
}


 export const update = (element, formData, formName) => {
    const newFormData = {
        ...formData,
    }
    const newElement  = {
        ...newFormData[element.id]
    }
    newElement.value = element.event.target.value;
    
    if(element.blur){
        let validData = validate(newElement, formData);
    }
}

