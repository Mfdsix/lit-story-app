const showResponseMessage = (data, showAlert = true) => {
    let _message = data.message

    showAlert && alert(_message)
    return _message
}

const showErrorMessage = (e, showAlert = true) => {
    let _message = e.message

    if(e.response && e.response.data){
        _message = e.response.data.message
    }

    showAlert && alert(_message)
    return _message
}

export {
    showResponseMessage,
    showErrorMessage
}