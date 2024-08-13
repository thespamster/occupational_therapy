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

/*  ** NEEDS TO BE ADJUSTED ** function to send an email via emailjs */

function sendMail(contactForm) {
    emailjs.send("gmail","4uxdesign", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    alert("Thank you. I will get back to you within 48hrs.");
    getElementById("project-form").reset();
    return false;
}