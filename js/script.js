// querySlector
const heading = document.querySelector('.header__texto h2') // 0 o 1 Elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);
// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para Enlace'
enlaces[0].classList.add('nueva-clase');
// enlaces[0].href = 'http://xnxx.com'



// getElementbyId (esto ya es viejito)

// const heading2 = document.getElementById('heading');
// console.log(heading2)


// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A')


// Agregar el href
nuevoEnlace.herf = 'nuevo-enlace.html';
// Agregar el texto 
nuevoEnlace.textContent = 'Nuevo Enlace';
// Agregar la Clase
nuevoEnlace.classList.add('navegacion__enlace');
// Agregarlo al Documento 
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace)


// Eventos


// console.log(1);


// window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen del HTML esten listos
//     console.log(2);
// })

// window.onload = function() {
//     console.log(3);
// }


// document.addEventListener('DOMConetenLoaded', function() { //Solo espera que se descargue el HTML, pero no espera el CSS o imagenes
//     console.log(4)
// });


// console.log(5)


// window.onscroll = function(evento) {
//     console.log('scrolling...')
// }



// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();

//     // Vlidar formulario 
    


//     console.log('enviando formulario');
// }) 


// Eventos de los inputs y texareas 

const datos = {
    nombre: '',
    email: '',
    mensaje: '',
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento de Submit

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //validar formilario 
    
    const { nombre, email, mensaje } = datos;
    
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son Obligatorios', true)
        
        return; //corta la ejecución del codigo
    }
    
    // Enviar fomulario
    mostrarAlerta('Mensaje enviado correctamente')
});


function leerTexto (e) {
    // // console.log(e.target.value);
    datos[e.target.id] = e.target.value;


    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null ) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    // se elminia en 5 segundo
    setTimeout(()=> {
        alerta.remove();
    }, 3000);
    

}


