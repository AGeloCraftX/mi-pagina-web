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

     // Categoría: Vitaminas, suplementos y nutrición
    } else if (msg.includes('vitaminas') || msg.includes('suplementos') || msg.includes('nutrición') || msg.includes('nutricion')) {
        return 'En la categoría de Vitaminas, suplementos y nutrición tenemos 112 productos disponibles para cuidar tu salud y bienestar.';

    // Categoría: Salud sexual y planificación
    } else if (msg.includes('sexual') || msg.includes('planificación') || msg.includes('planificacion') || msg.includes('preservativos')) {
        return 'En la categoría de Salud sexual y planificación contamos con 44 productos disponibles.';

    // Categoría: Naturales y fitoterapéuticos
    } else if (msg.includes('naturales') || msg.includes('fitoterapéuticos') || msg.includes('fitoterapeuticos') || msg.includes('natural')) {
        return 'En la categoría de Naturales y fitoterapéuticos tenemos 21 productos de origen natural disponibles.';

    // Categoría: Misceláneos
    } else if (msg.includes('misceláneos') || msg.includes('miscelaneos') || msg.includes('varios')) {
        return 'En la categoría de Misceláneos disponemos de 37 productos variados.';

    // Categoría: Medicamentos
    } else if (msg.includes('medicamentos') || msg.includes('pastillas') || msg.includes('jarabe') || msg.includes('pastilla')) {
        return 'En la categoría de Medicamentos contamos con un catálogo de 643 productos.';

    // Categoría: Material médico y primeros auxilios
    } else if (msg.includes('material médico') || msg.includes('material medico') || msg.includes('primeros auxilios') || msg.includes('auxilios')) {
        return 'En la categoría de Material médico y primeros auxilios tenemos 134 productos disponibles.';

    // Categoría: Higiene personal
    } else if (msg.includes('higiene') || msg.includes('personal') || msg.includes('aseo personal')) {
        return 'En la categoría de Higiene personal tenemos 128 productos para tu cuidado diario.';

    // Categoría: Cuidado de la piel y dermocosmética
    } else if (msg.includes('piel') || msg.includes('dermocosmética') || msg.includes('dermocosmetica') || msg.includes('crema facial')) {
        return 'En la categoría de Cuidado de la piel y dermocosmética contamos con 91 productos.';

    // Categoría: Cuidado capilar
    } else if (msg.includes('capilar') || msg.includes('cabello') || msg.includes('shampoo') || msg.includes('champu')) {
        return 'En la categoría de Cuidado capilar tenemos 90 productos para tu cabello.';

    // Categoría: Cosméticos y maquillaje
    } else if (msg.includes('cosméticos') || msg.includes('cosmeticos') || msg.includes('maquillaje')) {
        return 'En la categoría de Cosméticos y maquillaje disponemos de 84 productos.';

    // Categoría: Bebé y maternidad
    } else if (msg.includes('bebé') || msg.includes('bebe') || msg.includes('maternidad') || msg.includes('pañales')) {
        return 'En la categoría de Bebé y maternidad tenemos 46 productos para los más pequeños y el cuidado materno.';

    // Categoría: Aseo y hogar
    } else if (msg.includes('aseo') || msg.includes('hogar') || msg.includes('limpieza')) {
        return 'En la categoría de Aseo y hogar tenemos 12 productos disponibles para el mantenimiento del hogar.';
        
    // 5. Respuesta por defecto (si no coincide con ninguna anterior)
    } else {
        return 'Perdona no puedo ayudarte con tu solicitud.';
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
