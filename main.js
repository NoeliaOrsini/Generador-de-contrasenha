let cantidad = document.getElementById ("cantidad");
let boton = document.getElementById ("generar");
let contrasena = document.getElementById ("contrasena");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}|/";

function generar () {
    let numeroDigitado = parseInt(cantidad.value);

    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = "";
    for (let i = 0; i < numeroDigitado; i++) {

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio;
    } 
    
    contrasena.value = password;
    validarContrasena(password);
}

function validarContrasena(password) {
    // Validar si contiene al menos un número
    const tieneNumero = /\d/;
    // Validar si contiene al menos una letra mayúscula
    const tieneMayuscula = /[A-Z]/;
    // Validar si contiene al menos un símbolo especial
    const tieneSimbolo = /[!@#$%^&*()]/;

    if (!tieneNumero.test(password) || !tieneMayuscula.test(password) || !tieneSimbolo.test(password)) {
        mensaje.textContent = "La contraseña es débil. Debe contener al menos un número, una letra mayúscula y un símbolo especial.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "La contraseña es fuerte.";
        mensaje.style.color = "green";
    }
}


function clearText() {
    document.getElementById('contrasena').value = ''; // Limpia el campo de la contraseña
    document.getElementById('cantidad').value = '';   // Limpia el campo de cantidad
    document.getElementById('mensaje').innerText = ''; // Limpia el mensaje de fortaleza

}









