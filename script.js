// Elementos del chat
const inputTexto = document.getElementById('inputTexto');
const btnEnviar = document.getElementById('btnEnviar');
const chatMensajes = document.getElementById('chatMensajes');

// Elementos para abrir y cerrar el chat
const toggleBtn = document.getElementById('chat-toggle-btn');
const chatContainer = document.getElementById('chatContainer');
const closeBtn = document.getElementById('chat-close-btn');

// ENVIAR MENSAJE
function enviarMensaje() {
    let textoUsuario = inputTexto.value.trim();

    if (textoUsuario === "") return;

    agregarMensajeAlChat(textoUsuario, 'usuario');
    inputTexto.value = "";

    setTimeout(() => {
        let respuestaBot = generarRespuesta(textoUsuario);
        agregarMensajeAlChat(respuestaBot, 'bot');
    }, 1000);
}

// AGREGAR MENSAJES AL CHAT
function agregarMensajeAlChat(texto, remitente) {
    const nuevoDiv = document.createElement('div');

    nuevoDiv.classList.add('mensaje', remitente);
    nuevoDiv.textContent = texto;

    chatMensajes.appendChild(nuevoDiv);
    chatMensajes.scrollTop = chatMensajes.scrollHeight;
}

// GENERAR RESPUESTAS AUTOMÁTICAS
function generarRespuesta(mensaje) {
    let msg = mensaje.toLowerCase();

    if (msg.includes('hola') || msg.includes('saludos')) {
        return '¡Hola! ¿Cómo estás? Pregúntame algo sobre programación.';

    } else if (msg.includes('javascript') || msg.includes('js')) {
        return 'JavaScript es un lenguaje genial para crear páginas interactivas.';

    } else if (msg.includes('nombre')) {
        return 'Soy tu asistente virtual creado con JavaScript.';

    } else {
        return 'Interesante... Cuéntame más sobre eso.';
    }
}

// ABRIR Y CERRAR EL CHAT
toggleBtn.addEventListener('click', () => {
    if (chatContainer.style.display === 'flex') {
        chatContainer.style.display = 'none';
    } else {
        chatContainer.style.display = 'flex';
    }
});

// CERRAR EL CHAT CON LA X
closeBtn.addEventListener('click', () => {
    chatContainer.style.display = 'none';
});

// ENVIAR MENSAJE CON EL BOTÓN
btnEnviar.addEventListener('click', enviarMensaje);

// ENVIAR MENSAJE AL PRESIONAR ENTER
inputTexto.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        enviarMensaje();
    }
});
