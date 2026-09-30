const inputTexto = document.getElementById('inputTexto');
const btnEnviar = document.getElementById('btnEnviar');
const chatMensajes = document.getElementById('chatMensajes');

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

function agregarMensajeAlChat(texto, remitente) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('mensaje', remitente);
    nuevoDiv.textContent = texto;
    chatMensajes.appendChild(nuevoDiv);
    chatMensajes.scrollTop = chatMensajes.scrollHeight;
}

function generarRespuesta(mensaje) {
    let msg = mensaje.toLowerCase();

    if (msg.includes('hola') || msg.includes('saludos')) {
        return ' Hola! Como estas? Preguntame algo sobre programacion.';
    } else if (msg.includes('javascript') || msg.includes('js')) {
        return 'JavaScript es un lenguaje genial para crear paginas interactivas.';
    } else if (msg.includes('nombre')) {
        return 'Soy tu asistente virtual creado con JavaScript.';
    } else {
        return 'Interesante... Cuentame mas sobre eso.';
    }
}

    const toggleBtn = document.getElementById('chat-toggle-btn');
    const chatContainer = document.getElementById('chatContainer');
    const closeBtn = document.getElementById('chat-close-btn');

    // Función para abrir/cerrar el chat al hacer clic en el botón flotante
    toggleBtn.addEventListener('click', () => {
        if (chatContainer.style.display === 'flex') {
            chatContainer.style.display = 'none';
        } else {
            chatContainer.style.display = 'flex';
        }
    });

    // Opcional: Cerrar el chat con la "X" interna
    closeBtn.addEventListener('click', () => {
        chatContainer.style.display = 'none';
    });
</script>
