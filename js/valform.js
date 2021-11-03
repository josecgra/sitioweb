const email = document.getElementById("correo");


// mensaje customizado para email
email.addEventListener("input", function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Estaba esperando un correo electronico [mensaje customizado]");
    } else {
        email.setCustomValidity("");
    }
});



const form = document.getElementById("formulario");

form.addEventListener('submit',validar);

function validar(evento){
    evento.preventDefault();
    const nombre = document.getElementById("nombre");
    const telf = document.getElementById("telefono");
    const mail = document.getElementById("correo");
    const span = document.getElementById("err");
    
    let validado = true;


    if (nombre.value.length == 0){
        span.textContent="El nombre está vacío";
        span.setAttribute("class", "errores");
        validado = false;
    }

    if (telf.value.length == 0){
        span.textContent="El telefono está vacío";
        span.setAttribute("class", "errores");
        validado = false;
    }

    if (mail.value.length == 0){
        span.textContent="El correo está vacío";
        span.setAttribute("class", "errores");
        validado = false;
    }

    if (validado) {
        this.submit();
    }




}
