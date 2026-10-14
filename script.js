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

function generarRespuesta(mensaje) {
    let msg = mensaje.toLowerCase();

    // 1. Saludos
    if (msg.includes('hola') || msg.includes('saludos') || msg.includes('buenas')) {
        return '¡Hola! ¿En qué te puedo ayudar hoy?';

    // 2. Sobre ti / Identidad
    } else if (msg.includes('nombre') || msg.includes('quién eres')) {
        return 'Soy un asistente virtual, programado para ayudarte en cualquier duda que tengas.';

    // 3. Sobre JavaScript o programación
    } else if (msg.includes('javascript') || msg.includes('js') || msg.includes('programación')) {
        return 'JavaScript es un lenguaje genial para crear páginas web interactivas.';

    // 4. Ayuda o Soporte
    } else if (msg.includes('ayuda') || msg.includes('soporte')) {
        return 'Claro, dime cuál es tu duda y con gusto te ayudo.';

    // 2. Horarios de atención
    } else if (msg.includes('horario') || msg.includes('abierto') || msg.includes('hora')) {
        return 'Nuestro horario de atención es de lunes a sábado de 8:00 a.m. a 9:00 p.m., y domingos/festivos de 9:00 a.m. a 6:00 p.m.';

    // 3. Servicio a domicilio
    } else if (msg.includes('domicilio') || msg.includes('envío') || msg.includes('llevar')) {
        return '¡Sí contamos con servicio a domicilio! Puedes hacer tu pedido por este medio o llamando a nuestro número directo.';z

    // 5. Métodos de pago
    } else if (msg.includes('pago') || msg.includes('tarjeta') || msg.includes('nequi') || msg.includes('efectivo')) {
        return 'Aceptamos pagos en efectivo, transferencias (Nequi, Daviplata) y todas las tarjetas de crédito o débito.';

    // 6. Medicamentos con receta
    } else if (msg.includes('receta') || msg.includes('fórmula') || msg.includes('médica')) {
        return 'Para medicamentos de control o bajo fórmula médica, es necesario presentar la receta física o digital vigente.';

    // 7. Ubicación
    } else if (msg.includes('dónde') || msg.includes('ubicación') || msg.includes('dirección') || msg.includes('queda')) {
        return 'Nos encontramos en la [Escribe aquí tu dirección]. ¡Te esperamos!';
        
   //  EASTER EGGs OCULTO 
    } else if (msg.includes('tu que haces en mi juego') || msg.includes('Tu que haces en mi juego') || msg.includes('TU QUE HACES EN MI JUEGO') || msg.includes('tU QUE HACES EN MI JUEGO')) {
        return ' **[EASTER EGG ENCONTRADO]**\n\n' +
               ' "¿Acaso quieres que te mate?" \n\n' +
               '¡Desbloqueaste un EASTER EGG! ¿Quieres seguir buscando ?';
        
    
    // 5. Respuesta por defecto (si no coincide con ninguna anterior)
    } else {
        return 'Interesante... Cuéntame más sobre eso o pregúntame otra cosa.';
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
