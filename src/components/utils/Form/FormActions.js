


 const update = (element, formData, formName) => {
    const newFormData = {
        ...formData,
    }
    const newElement  = {
        ...newFormData[element.id]
    }
}

export default update;