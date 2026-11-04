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

     // Productos de Vitaminas, suplementos y nutrición
    } else if (msg.includes('activox')) {
        return 'El Actiox x 12 sobres (4 tabletas masticables) de Natural Freshly tiene un valor de $40.000 la caja o $3.500 por unidad.';
    } else if (msg.includes('bilsyl') || msg.includes('silimarina')) {
        return 'El Bilsyl 240mg (Silimarina) lo tenemos en presentación de 20 cápsulas a $39.000 o por blíster de 10 cápsulas a $19.500.';
    } else if (msg.includes('biotina')) {
        return 'La Biotina de 900 mcg en caja de 30 cápsulas blandas cuesta $28.900, y en presentación de 15 cápsulas a $15.000.';
    } else if (msg.includes('centrum')) {
        return 'Contamos con Centrum Advance x 30 tabletas a $42.900 y Centrum Silver +50 años x 30 tabletas a $47.900.';
    } else if (msg.includes('colageno') || msg.includes('colágeno')) {
        return 'El Colágeno Hidrolizado de 500 mg (caja x 30 cápsulas blandas) tiene un precio de $29.900.';

     // Productos de Misceláneos
    } else if (msg.includes('cargador') || msg.includes('tipo c')) {
        return 'Contamos con el Cargador Tipo C de Ora a un precio de $12.900.';
    } else if (msg.includes('chocolatina') || msg.includes('hershey') || msg.includes('twix')) {
        return 'Tenemos la Chocolatina Hershey’s Cookies\'n Cream a $9.500 y la Chocolatina Twix de 50.7 g a $8.900.';
    } else if (msg.includes('pila') || msg.includes('pilas')) {
        return 'Disponemos de pilas alcalinas como la Panasonic AA a $5.500 la unidad, el par de pilas Panasonic AAA alcalinas a $5.900, y pilas Tronex 9V a $9.500.';
    } else if (msg.includes('simcard') || msg.includes('claro')) {
        return 'Tenemos Simcard Claro disponible por solo $5.000.';
    } else if (msg.includes('trolli') || msg.includes('gomas') || msg.includes('dulces')) {
        return 'Ofrecemos variedad de gomas Trolli (Anillos, Banana, Mordiscos Tiburón, etc.) de 40g a 45g por un precio de $2.000 cada una.';

     // Productos de Naturales y fitoterapéuticos
    } else if (msg.includes('calendula') || msg.includes('caléndula')) {
        return 'Tenemos Caléndula de Natural Medy en caja x 15 sachets a $43.000 (o $3.000 por unidad) y la presentación en crema de Caléndula y Árnica x 110g a $8.900.';
    } else if (msg.includes('kanabis') || msg.includes('cannabis')) {
        return 'Contamos con la Crema Mentolada Kanabis con árnica y caléndula (20 g) de Cosmenales por $11.900.';
    } else if (msg.includes('totuma') || msg.includes('jarabe')) {
        return 'El Jarabe de Totuma con Miel y Eucalipto (240 ml) de Natural Medy tiene un valor de $18.500.';
    } else if (msg.includes('propol') || msg.includes('propolis') || msg.includes('propóleo')) {
        return 'Ofrecemos Propol-VK (Propóleo, miel y jengibre) de 120 ml a $19.900, y el Propolis Cough con polen de 180 ml a $12.500.';
    } else if (msg.includes('vitafer') || msg.includes('zarzaparrilla')) {
        return 'Tenemos Vitafer-L en sachets de 10 ml a $2.000 la unidad y la Zarzaparrilla Fenat (360 ml) de Natural Medy a $19.900.';

     // Productos de Medicamentos
    } else if (msg.includes('acetaminofen') || msg.includes('acetaminofén')) {
        return 'El Acetaminofén 500 mg de Genfar cuesta $14.900 la caja x 100 tabletas (o $1.500 el blíster), y el Acetaminofén Forte + Cafeína (MK) cuesta $2.000 la unidad.';
    } else if (msg.includes('aciclovir')) {
        return 'El Aciclovir 5% crema (15 g) cuesta $12.500 y en tabletas de 800 mg de Laproff tiene un costo de $18.500 el blíster de 10 tabletas.';
    } else if (msg.includes('advil')) {
        return 'Tenemos Advil Gripa Max cápsula líquida a $3.300 la unidad, Advil Teens Minis (36 cap) a $2.500 la unidad y Advil Ultra a $2.900 la unidad.';
    } else if (msg.includes('amoxicilina')) {
        return 'La Amoxicilina 500 mg de Delta cuesta $4.900 el blíster (o $49.000 caja x 100) y en suspensión (250 mg / 100 ml) a $11.900.';
    } else if (msg.includes('apronax')) {
        return 'El Apronax Liquid Gels 275 mg de Bayer tiene un costo de $2.500 por unidad o $24.900 el blíster de 10 cápsulas.';

    // Productos de Material médico y primeros auxilios
    } else if (msg.includes('alcohol')) {
        return 'Contamos con Alcohol Antiséptico al 70% x 120 ml a $3.500 (OSA), x 345 ml a $6.500 y presentación de 700 ml (JGB) a $12.500.';
    } else if (msg.includes('algodon') || msg.includes('algodón')) {
        return 'El Algodón Higietex está disponible en presentación de 25 g a $3.000 y de 50 g a $5.500.';
    } else if (msg.includes('curas')) {
        return 'Las Curas Medicare resistentes al agua piel tienen un costo de $200 la unidad, $1.900 el blíster x 10 o $17.000 la caja x 100.';
    } else if (msg.includes('esparadrapo')) {
        return 'Ofrecemos Esparadrapo de tela Begut (1x1) a $3.900 la unidad y Esparadrapo 4x5 yd blanco Supreme a $18.900.';
    } else if (msg.includes('guantes') || msg.includes('guante')) {
        return 'Tenemos Guantes de Látex Protex a $1.000 el par, Guantes de Nitrilo Azul (caja x 100) a $39.000 y Guantes de Vinilo a $900 el par.';

    // Productos de Cuidado de la piel y dermocosmética
    } else if (msg.includes('aceite almendras') || msg.includes('aceite argan')) {
        return 'Tenemos Aceite de Almendras Athos (120 ml) a $9.900 y Aceite de Argán (250 ml) BCN Medical a $15.900.';
    } else if (msg.includes('agua micelar')) {
        return 'Contamos con Agua Micelar Natural Freshly (80 ml) a $15.900, Garnier Vitamina C (100 ml) a $16.900 y Nivea Rosas (100 ml) a $19.500.';
    } else if (msg.includes('lubriderm')) {
        return 'La crema Lubriderm Humectación Delicada (120 ml) cuesta $18.900, Reparación Intensiva (200 ml) $31.500 y Lubriderm UV 15 (120 ml) $20.500.';
    } else if (msg.includes('protector solar') || msg.includes('nude')) {
        return 'El Protector Solar Nude FPS 60+ en sachet (10 ml) cuesta $3.900 la unidad, Sun Pro SPF 80 a $4.900 y Sundark Kids a $4.500.';
    } else if (msg.includes('vick') || msg.includes('vaporub')) {
        return 'El Vick VapoRub de 12 g tiene un precio de $7.500.';

    // Productos de Salud sexual y planificación
    } else if (msg.includes('durex') || msg.includes('condon piel') || msg.includes('condones')) {
        return 'Contamos con Condón Durex Máximo Placer (caja x 3) a $15.900, Condones Piel (Sabores, Retardante, Excitante o Sensitivo x 3) a $10.900 y Condón Económico a $2.500 el paquete x 3.';
    } else if (msg.includes('bellaface') || msg.includes('diane') || msg.includes('microgynon')) {
        return 'En anticonceptivos orales tenemos Bellaface x 21 tabs a $31.500, Diane 35 a $14.900 y Microgynon 30 a $9.500.';
    } else if (msg.includes('copa menstrual')) {
        return 'La Copa Menstrual Advance tiene un valor de $44.900.';
    } else if (msg.includes('lubricante') || msg.includes('gel lubricante')) {
        return 'El Gel Lubricante Neutro Piel (sachet) cuesta $3.000 y el Lubricante Íntimo Sen Crema Whisky (30 ml) tiene un valor de $34.900.';
    } else if (msg.includes('prueba de embarazo')) {
        return 'La Prueba de Embarazo en Cassette cuesta $5.000, la de marca Profamilia $12.500 y la presentación en Lapicero Chemi $13.500.';

    // Productos de Bebé y maternidad
    } else if (msg.includes('aceite johnson') || msg.includes('shampoo johnson')) {
        return 'El Aceite Johnson’s Baby Original (100 ml) cuesta $19.500 y el Shampoo Johnson’s Baby (Manzanilla o Original 100 ml) cuesta $13.900.';
    } else if (msg.includes('acid mantle baby')) {
        return 'El Acid Mantle Baby de 30 g tiene un costo de $25.900.';
    } else if (msg.includes('tetero') || msg.includes('biberon')) {
        return 'Contamos con Biberón Corchito 5 oz a $11.900, Tetero Doble Manija 8 oz a $14.900 y Tetero Antirreflujo Baby Slim 11 oz a $22.500.';
    } else if (msg.includes('pañales') || msg.includes('pañal bebe') || msg.includes('pañal tena')) {
        return 'Tenemos Pañales Bebex Etapa 3-G a $1.500 la unidad ($43.000 caja x 30), Winny Etapa 2 (x 16) a $17.600 y Tena Pants Clásico M/L a $6.500 la unidad.';
    } else if (msg.includes('pañitos') || msg.includes('pequeñin')) {
        return 'Los Pañitos Pequeñín Almendra x 24 unidades cuestan $5.500 y la presentación x 70 unidades cuesta $12.900.';
        
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
