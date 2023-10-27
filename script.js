// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
// 'use strict'

// // Fetch all the forms we want to apply custom Bootstrap validation styles to
// const forms = document.querySelectorAll('.needs-validation')

// // Loop over them and prevent submission
// Array.from(forms).forEach(form => {
// form.addEventListener('submit', event => {
// if (!form.checkValidity()) {
// event.preventDefault()
// event.stopPropagation()
// }

// form.classList.add('was-validated')
// }, false)
// })
// })()



// const $form = document.querySelector('#form')

// $form.addEventListener('submit', handleSubmit)

// async function handleSubmit(event){
//     event.preventDefault()
//     const form = new formData(this)
//     const response = fetch(this.action,{
//         method: this.method,
//         body: form, 
//         headers:{
//             'Accept': 'application/json'
//         }
//     })
//     if (response.ok){
//         this.reset()
//         alert('Gracias por contactarnos, te enviaremos pronto más novedades')
//     }
// }

document.getElementById("contact-form").addEventListener("submit", function (e) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        e.preventDefault();
        alert("Por favor, complete todos los campos obligatorios.");
    }

    // Agrega otras validaciones personalizadas aquí, por ejemplo, para la dirección de correo electrónico.

    // Si todos los campos son válidos, el formulario se enviará a Formspree.
});