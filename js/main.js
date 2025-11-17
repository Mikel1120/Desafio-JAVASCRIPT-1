
// Miguel Angel Condori Copa

function brilloEstelar()
{
    let entrada =prompt("Introduzca su magnitud");
    let a = parseFloat(entrada);
    let b = "default";
    if (isNaN(a)) { 
        b = "Entrada no valida";
    } else if (a <= 0){
        b = "Extremadamente Brillante";
    } else if (a < 1.5){
        b = "Muy Brillante";
    } else if (a < 3.5){
        b = "Brillante";
    } else if (a <= 6.0){
        b = "Debil";
    } else {
        b = "No visible";
    }
    let resultado = document.getElementById("respuesta-astro");
    resultado.innerText=`la brillantez cuerpo es: ${b}`;
}

function distanciaPlanetas()
{
    let entrada = prompt("Cuantas distancias deseas introducir?")
    let a = parseInt(entrada);
    let prom = 0;
    for(let i=0; i<a; i++){
        let entrada1 = prompt("Introducir distancia");
        let b = parseFloat(entrada1);
        prom =+ b;
    }
    let resultado = document.getElementById("respuesta-astro");
    resultado.innerText=`La distancia promedio es: ${prom}`;
}

function crateresLunares() 
{
    let d;
    let c = 0;
    while (d != 0) {
        let entrada = prompt("Introduce el diametro del crater (introduzca 0 si quiere finalizar la operacion)");
        d = parseFloat(entrada);
        if (entrada === null || entrada === "") {
            alert("Invalido");
            continue;
        }
        if (isNaN(d)) {
            alert("Invalido");
            continue;
        }
        if (d >= 50) {
            c = c+1;
        }
    }
    let resultado = document.getElementById("respuesta-astro");
    resultado.innerText = `El total de crateres grandes es: ${c}`;
}

function cuerpoCeleste() {
    let entrada = prompt("Introduce un numero del 1 al 5:\n1=Estrella\n2=Planeta\n3=Cometa\n4=Astreoide\n5=Galaxia");
    let a = parseInt(entrada);
    let b = "";
    switch (a) {
        case 1:
            b = "Estrella";
            break;

        case 2:
            b = "Planeta";
            break;

        case 3:
            b = "Cometa";
            break;

        case 4:
            b = "Asteroide";
            break;

        case 5:
            b = "Galaxia";
            break;

        default:
            b = "Código inválido";
            break;
    }
    let resultado = document.getElementById("respuesta-astro");
    resultado.innerText = `El cuerpo celeste es: ${b}`;
}

function nivelesLuz() {
    let entrada;
    let n = [];

    do {
        entrada = prompt("Ingrese el nivel de luz en lux (escriba 'no' para finalizar):");

        if (entrada.toLowerCase() === "no") {
            break;
        }

        let a = parseFloat(entrada);

        if (isNaN(a) || a < 0) {
            alert("Entrada inválida");
            continue;
        }

        n.push(a);
        if (a < 5) {
            alert("Noche profunda");
        }
    } while (true);
    let resultado = document.getElementById("respuesta-astro");
    resultado.innerText = `Niveles registrados: ${n.join(", ")}`;
}

function presionArterial() {
    let entrada = prompt("Ingrese presión sistolica:");
    let sistolica= parseFloat(entrada);
    let entrada1 = prompt("Ingrese presión diastolica:");
    let diastolica = parseFloat(entrada1);
    let b = "";

    if (sistolica < 120 && diastolica < 80) {
        b = "Normal";
    } else if (sistolica < 130 && diastolica < 80) {
        b = "Elevada";
    } else if (sistolica < 140 || diastolica < 90) {
        b = "HTA grado 1";
    } else {
        b = "HTA grado 2";
    }
    let resultado = document.getElementById("respuesta-salud");
    resultado.innerText = `Su presion arterial es: ${b}`;
}

function registrarTemperaturas() {
    let entrada = prompt("Ingrese número de pacientes:");
    let n = parseInt(entrada)
    let prom = 0;

    for (let i = 0; i < n; i++) {
        let entrada1 = prompt(`Temperatura paciente ${i+1}:`);
        let temp = parseFloat(entrada1);
        prom += temp;
    }

    prom = prom / n;
    let resultado = document.getElementById("respuesta-salud");
    resultado.innerText = `el promedio de temperatura es: ${prom}`;
}

function conFiebre() {
    let temp;
    let c = 0;

    while (temp != 0) {
        entrada=prompt("Ingrese temperatura (0 para finalizar):")
        temp = parseFloat(entrada);
        if (temp >= 38) {
            c++;
        }
    }
    let resultado = document.getElementById("respuesta-salud");
    resultado.innerText = `Pacientes con fiebre: ${c}`;
}

function clasificarTriage() {
    entrada = prompt("Introduce un numero del 1 al 4:\n1=Rojo\n2=Amarillo\n3=Verde\n4=Azul")
    let a = parseInt(entrada);
    let b = "";

    switch (a) {
        case 1: 
            b = "Rojo"; 
            break;
        case 2: 
            b = "Amarillo"; 
            break;
        case 3: 
            b = "Verde"; 
            break;
        case 4: 
            b = "Azul"; 
            break;
        default: 
            b = "Código inválido"; 
            break;
    }
    let resultado = document.getElementById("respuesta-salud");
    resultado.innerText = `Pacientes con fiebre: ${b}`;
}

function saturacionSpO2() {
    let entrada;
    let s = [];
    do {
        entrada = prompt("Ingrese saturación SpO2 (escriba 'no' para terminar):");
        if (entrada.toLowerCase() === "no"){
            break;
        }
        let valor = parseFloat(entrada);
        if (!isNaN(valor)){ 
            s.push(valor);
        }
    } while (true);
    let resultado = document.getElementById("respuesta-salud");
    resultado.innerText = `Saturaciones registradas: ${s.join(", ")}`;
}

function calidadAire() {
    let entrada = prompt("Ingrese valor AQI:");
    let aqi = parseFloat(entrada);
    let b = "";

    if (aqi <= 50) {
        b = "Bueno";
    } else if (aqi <= 150) {
        b = "Moderado";
    } else {
        b = "Dañino";
    }
    let resultado = document.getElementById("respuesta-ambie");
    resultado.innerText = `Calidad del aire: ${b}`;
}

function nivelesRuido() {
    let entrada = prompt("Ingrese nmero de mediciones:");
    let n = parseInt(entrada);
    let prom = 0;

    for (let i = 0; i < n; i++) {
        let entrada1 = prompt(`Nivel de ruido ${i+1} (dB):`);
        let db = parseFloat(entrada1);
        prom += db;
    }

    prom = prom / n;
    let resultado = document.getElementById("respuesta-ambie");
    resultado.innerText = `Promedio de ruido: ${prom} dB`;
}

function focosCalor() {
    let entrada;
    let t;
    let c = 0;

    while (t != 0) {
        entrada = prompt("Ingrese temperatura (0 para finalizar):");
        t = parseFloat(entrada);
        if (t > 45) {
            c++;
        }
    }

    let resultado = document.getElementById("respuesta-ambie");
    resultado.innerText = `Focos detectados: ${c}`;
}

function tipoResiduo() {
    entrada = prompt("Ingrese un numero del 1 al 4:\n1=Organico\n2=Plastico\n3=Papel/Carton\n4=Vidrio");
    let a = parseInt(entrada);
    let b = "";
    switch (a) {
        case 1: b = "Organico"; break;
        case 2: b = "Plastico"; break;
        case 3: b = "Papel/Carton"; break;
        case 4: b = "Vidrio"; break;
        default: b = "invalido"; break;
    }

    let resultado = document.getElementById("respuesta-ambie");
    resultado.innerText = `Residuo clasificado: ${b}`;
}
function nivelesRio() {
    let entrada;
    let niveles = [];

    do {
        entrada = prompt("Ingrese nivel del rio (escriba 'no' para terminar):");
        if (entrada.toLowerCase() === "no") {
            break;
        }
        let valor = parseFloat(entrada);
        if (!isNaN(valor)) {
            niveles.push(valor);
            if (valor > 3) {
                alert("Nivel critico del rio");
            }
        }
    } while (true);

    let resultado = document.getElementById("respuesta-ambie");
    resultado.innerText = `Niveles registrados: ${niveles.join(", ")}`;
}