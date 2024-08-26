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
        appendAlert("The embedded Google Map uses the latest Javascript API which doesn't uses cookies. This site does not use tracking cookies of any kind.", 'warning')
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