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
        return '¡Hola! Soy un asistente virtual puedes preguntar sobre las categorías de productos como: Vitaminas, suplementos y nutrición, Salud sexual y planificación, Naturales y fitoterapéuticos, Misceláneos, Medicamentos, Material médico y primeros auxilios, Higiene personal, Cuidado de la piel y dermocosmética, Cuidado capilar, Cosméticos y maquillaje, Bebé y maternidad, Aseo y hogar, Ademas puedes perguntar sobre informacion general de la Farmacia ';

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
        return 'Nuestro horario de atención es de lunes a sábado de 8:00 a.m. a 8:00 p.m., y domingos/festivos de 9:00 a.m. a 2:00 p.m.';

    // 3. Servicio a domicilio
    } else if (msg.includes('domicilio') || msg.includes('envío') || msg.includes('llevar')) {
        return '¡Sí contamos con servicio a domicilio! Puedes hacer tu pedido por este llamando a nuestro número directo el cual es (604 6221124).';z

    // 5. Métodos de pago
    } else if (msg.includes('pago') || msg.includes('tarjeta') || msg.includes('nequi') || msg.includes('efectivo')) {
        return 'Aceptamos pagos en efectivo, transferencias (Nequi, Daviplata) y todas las tarjetas de crédito o débito.';

    // 6. Medicamentos con receta
    } else if (msg.includes('receta') || msg.includes('fórmula') || msg.includes('médica')) {
        return 'Para medicamentos de control o bajo fórmula médica, es necesario presentar la receta física o digital vigente.';

    // 7. Ubicación
    } else if (msg.includes('donde') || msg.includes('ubicacion') || msg.includes('direccion') || msg.includes('queda')) {
        return 'Nos encontramos en la Cra. 42B #26 A SUR 23. ¡Te esperamos!';

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

     // Productos de Cuidado capilar
    } else if (msg.includes('aceite capilar') || msg.includes('cebolla y romero')) {
        return 'El Aceite Capilar de Cebolla y Romero Nutribella (10 g) cuesta $2.000 y el Aceite de Aguacate Wildlife (100 ml) para piel y cabello cuesta $6.500.';
    } else if (msg.includes('aceite de argan capilar') || msg.includes('aceite de coco capilar')) {
        return 'Contamos con tratamiento capilar en sobre (10 g) Lehit de Aceite de Argán o Aceite de Coco a $3.000 la unidad.';
    } else if (msg.includes('shampoo') || msg.includes('champu')) {
        return 'Tenemos variedad de shampoos disponibles en catálogo según la marca y presentación que busques.';
    } else if (msg.includes('tratamiento capilar') || msg.includes('lehit')) {
        return 'Manejamos tratamientos capilares Lehit en sobres desde $3.000.';
    } else if (msg.includes('crema de peinar')) {
        return 'Ofrecemos cremas para peinar de distintas marcas a partir de $5.000.';

    // Productos de Cosméticos y maquillaje
    } else if (msg.includes('polvo compactos') || msg.includes('nailen') || msg.includes('polvo nailen')) {
        return 'El Polvo Compacto Nailen (#2, #3, #4, #5, #6) x 14 g tiene un precio de $12.500 y el Polvo Compacto Kalóe cuesta $17.900.';
    } else if (msg.includes('esmalte masglo') || msg.includes('esmaltes')) {
        return 'Los Esmaltes Masglo tradicionales (13.5 ml) cuestan $11.500, la línea Masglo Gel $15.500 y los Esmaltes Admiss $5.500.';
    } else if (msg.includes('balsamo labial') || msg.includes('kiss mi')) {
        return 'El Bálsamo Labial Kiss Mi de Vogue (4.8 g) cuesta $12.500 en sabor fresa y $13.500 en sabor uva.';
    } else if (msg.includes('pestañina') || msg.includes('encrespador')) {
        return 'La Pestañina Bon Shik Volumen cuesta $10.500 y los Encrespadores de Pestañas Bon Shik cuestan $11.500.';
    } else if (msg.includes('desmaquillador') || msg.includes('pomys')) {
        return 'Las Rueditas Desmaquilladoras Pomys (paquete x 120) cuestan $21.900 y Pomys Esencial x 50 unidades cuesta $7.500.';

    // Productos de Aseo y hogar
    } else if (msg.includes('alcanfor')) {
        return 'El Alcanfor Yoma x 40 tabletas tiene un precio de $3.500 el paquete x 2 unidades o $70.000 la caja x 40.';
    } else if (msg.includes('betun') || msg.includes('betún')) {
        return 'El Betún Cherry en pasta marrón (30 g) cuesta $3.000 y el Betún Líquido Blanco Béisbol (60 ml) cuesta $11.000.';
    } else if (msg.includes('repelente autan') || msg.includes('pica fin')) {
        return 'El Repelente Autan en crema (196 g) cuesta $24.900, el Repelente Kids Alumblock (120 ml) cuesta $29.500 y el Pica Fin Roll-on (60 ml) $12.500.';
    } else if (msg.includes('pond\'s limpiador') || msg.includes('ponds limpiador')) {
        return 'El Limpiador Facial Diario Pond’s (50 g) cuesta $19.500.';
    } else if (msg.includes('desinfectante') || msg.includes('limpieza hogar')) {
        return 'Contamos con productos de limpieza e higiene para el hogar disponibles en tienda.';

    // Productos de Higiene personal
    } else if (msg.includes('axe') || msg.includes('desodorante axe')) {
        return 'El Desodorante Axe Spray (152 ml) en variedades Epic Fresh o Ice Chill cuesta entre $22.500 y $23.900.';
    } else if (msg.includes('deo pies') || msg.includes('deopies')) {
        return 'El Deo Pies Antibacterial Spray cuesta $20.500 (180 ml), $24.900 (260 ml) y la presentación en crema de 50 g cuesta $11.900.';
    } else if (msg.includes('dove desodorante') || msg.includes('rexona desodorante')) {
        return 'El Desodorante Dove Aerosol cuesta $26.900, Dove Roll-on $5.500, Rexona Roll-on $14.900 y Rexona Clinical Crema $25.500.';
    } else if (msg.includes('jabon protex') || msg.includes('jabón protex') || msg.includes('jabon dove')) {
        return 'El Jabón Protex en barra (110 g/120 g) cuesta $5.200, el Jabón Dove Antibacterial $8.900 y el Jabón Intimó Protex Doypack (140 ml) $15.500.';
    } else if (msg.includes('prestobarba') || msg.includes('maquina de afeitar')) {
        return 'La Prestobarba Gillette 3 hojas cuesta $7.000, Prestobarba Venus Rosada $6.500 y Schick Xtreme 3 Sensitive $5.500 la unidad.';
    
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
