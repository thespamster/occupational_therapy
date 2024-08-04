// Modified Bootstrap Javascript for cookie alert //

const alertPlaceholder = document.getElementById('cookieStatement')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('cookieButton')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Only essential browser cookies are used ie. for Google Maps. This site does not track you. By using this site you are agreeing to the use of these cookies.', 'warning')
    })
}