document.querySelector('#enviar').addEventListener('click', function validarenvio() {
let nombres = document.querySelector('#nombres').value;
let paquete = document.querySelector('#paquete').value;
let mensaje = document.querySelector('#mensaje').value; 

    if(nombres==0) {
        alert("Por favor complete su nombre");
    }

    else if (paquete=='Elija') {
        alert("Por favor elija un paquete");
    }

    else if (mensaje==0) {
        alert("Por favor ingrese su consulta");
    }

    else {
    let url = "https://api.whatsapp.com/send?phone=5491159297124&text=*Pisar la Tierra-Agencia de viajes y turismo*%0A*¿Cuál es tu nombre?*%0A" + nombres + "%0A*Paquete*%0A" + paquete + "%0A*Ingrese su consulta*%0A" + mensaje;

        window.open(url);
    }
});