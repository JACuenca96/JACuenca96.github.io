function traerDatos() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            mostrarDatos(data);
        });
}
traerDatos();

function mostrarDatos(data) {
    document.getElementById('nombreRandom').innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    document.getElementById('fotoPerfilRandom').src = data.results[0].picture.large;
    document.getElementById('correoRandom').innerHTML = data.results[0].email;
    document.getElementById('telefonoRandom').innerHTML = data.results[0].cell;
    document.getElementById('direccionRandom').innerHTML = data.results[0].location.street.name + "," + data.results[0].location.street.number + "," + data.results[0].location.state;
    console.log(data.results[0]);

/** Este if  modifica los textos(experiencia/educacion/acerca de) en funcion del genero del érfil random*/    
    if (data.results[0].gender === "male") {
        document.getElementById('puesto').innerHTML = 'Gerente de Cuentas Jr.';
        document.getElementById('donde-desde').innerHTML = 'Verisure, Madrid (Abr.2018-Presente)';
        document.getElementById('experiencia').innerHTML = 'Como Gerente de Cuentas Jr. en Verisure, soy el primer punto de contacto para clientes actuales y potenciales. Mi trabajo es informarle a interesados en los sistemas de alarmas y las suscripciones de seguridad asociadas. He adquirido una amplia experiencia con: <ul> <li> Seguimiento de leads.</li> <li> Varias técicas de cros-sell y up-sell.</li> <li> Vender tanto a empresas como a particulares.</li> </ul>';

        document.getElementById('puesto2').innerHTML = 'Empleado de ventas';
        document.getElementById('donde-desde2').innerHTML = 'Bever Outdoor & Travel, Madrid (Ene.2015-Mar.2018)';
        document.getElementById('experiencia2').innerHTML = 'En Bever Outdoor & Travel, trabajé como empleado de ventas. Asesoré a los clientes, los ayudé con el pago y aseguré una apariencia profecional de la tienda.';

        document.getElementById('titulo').innerHTML = 'Comercio';
        document.getElementById('universidad').innerHTML = 'Madrid (Ago.2015-Ago.2018)';
        document.getElementById('educacion').innerHTML = 'En la Universidad de Madrid me preparé para un trabajo como Gerente de Cuentas. Además de materias generales como español, ingles, matemáticas, administración; también recibí materias destinadas a mi futura profesión, como comunicación, marketing, ventas y análisis de cuentas.';

        document.getElementById('acercaDeTexto').innerHTML = 'Mis colegas me describen como un gerente de cuentas enérgico, estudioso y apasionado por su trabajo. Después de tres años instructivos en mi empleo actual, creo que es hora de un nuevo reto. Con mi experiencia adquirida tanto en llamadas en frio como en gestión de relaciones, estoy convencido de que también puedo ser un activo real para el equipo de ventas. En mi empleo actual he sido nombrado vendedor del mes, no menos de 9 veces.';

    } else {
        document.getElementById('puesto').innerHTML = 'Marketing Manager Sr.';
        document.getElementById('donde-desde').innerHTML = 'Barcelona (May.2017-Presente)';
        document.getElementById('experiencia').innerHTML = 'En Webtz, soy la principal responsable de dirigir el equipo de Marketing, el control de presupuesto y la presentación de informes a la Gerencia. <ul> <li> Montar un equipo interno de SEO con el objetivo de mejorer posiciones orgánicas, lo que ha resultado en un crecimiento de 20K visitantes orgánicos mensuales.</li> <li> Supervisar y controlar los presupuestos de las campañas y garantizar la asignación eficiente del presupuesto a los distintos canales de marketing.</li> </ul> ';

        document.getElementById('puesto2').innerHTML = 'Gerente de Marketing';
        document.getElementById('donde-desde2').innerHTML = 'Barcelona (Ene.2014-May.2017)';
        document.getElementById('experiencia2').innerHTML = 'Después de trabajar como empleada integral de Marketing durante 3 años, fui ascendida a Gerente de Marketing. En este rol, determiné la estrategia general de marketing que se ejecuto junto con el equipo. <ul> <li> Defií la estrategia general de marketing en colaboración con la Gerencia y me aseguré de que se ejecutara. </li> <li> Realización de estudios de mercado y análisis de la competencia a nivel nacional e internacional.</li></ul>';

        document.getElementById('titulo').innerHTML = 'MBA Administración de Empresas';
        document.getElementById('universidad').innerHTML = 'Barcelona (Sep.2000-May.2004)';
        document.getElementById('educacion').innerHTML = 'Durante mi maestria en Administración de Empresas en la Unversidad de Barcelona, aprendí a pensar criticamente sobre las organizaciones y las soluciones corporativas de diferentes campos.';

        document.getElementById('acercaDeTexto').innerHTML = 'Me describiría como una jugadora de equipo, trabajador, bien motivado y comunicativo. Debido a mis años de experiencia práctica en la profeción de marketing(online), tengo todas las cualidades para gestionar equipos de marketing medianos y grandes. Debido a mi enfoque pragmático y orientado a resultados, soy la persona adecuada para expandir la posición de mercado de su empresa. ';

    }

    document.getElementById('acercaDe').innerHTML = 'Acerca de ' + " " + data.results[0].name.first;
}
