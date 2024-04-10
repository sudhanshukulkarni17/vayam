// const form = document.querySelector('contact-form');
// const nameInput = document.querySelector('.name');
// const emailInput = document.querySelector('email');
// const messageInput = document.querySelector('.message');
// const serviceId = 'service_7cwhib4';
// const templateId = 'template_cvn5pkq';
// const publicKey = '9jeo2EH7Bc8K-sLCi';

// emailjs.init(publicKey);
// form.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   const inputdata = {
//     from_name:nameInput.value,
//     reply_to:emailInput.value,
//     message:messageInput.value
//   };
//   emailjs.send(serviceId, templateId, inputdata)
//   .then(
//     ()=> {
//       nameInput.value = '';
//       emailInput.value = '';
//       messageInput.value = '';
//       console.log('Success!');
//     }, (error) => {
//       console.log(error);
//     });
// });



function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const serviceId = 'service_7cwhib4';
    const templateId = 'template_mh2c4zc';
    const publicKey = '9jeo2EH7Bc8K-sLCi';

    emailjs.send(serviceId, templateId, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message was sent successfully!");
            })
        .catch((err) => console.log(err));

}

