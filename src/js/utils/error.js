const showResponseMessage = (data) => {
    let _message = data.message

    alert(_message)
    return _message
}

const showErrorMessage = (e) => {
    let _message = e.message

    if(e.response && e.response.data){
        _message = e.response.data.message
    }

    alert(_message)
    return _message
}

export {
    showResponseMessage,
    showErrorMessage
}