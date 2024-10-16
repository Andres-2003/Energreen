//Definimos el array con datos de consumo mensual y diario

//Cramos un array y adentro un objeto estos son los consumos mensuales
let consMensual = [
    {id: 1, mes1: 360564.00, mes2: 384315.00, mes3: 387502.00, mes4: 370280.00, mes5: 379247, mes6: 364362.00, mes7: 359071.00, mes8: 262314.00, mes9: 309625.00, mes10: 395009.00, mes11: 369941.00, mes12: 316982.00}
];

// Función para obtener el array
exports.getConsMensual = () =>{
    return consMensual;
};
console.log(consMensual);



//Función saca el consumo diario de cada mes divide /30
function DividirMes(array) {
    let nuevosValores = {};
    let contador = 1; // Contador para las nuevas claves

    for (let key in array[0]) {
        if (key !== 'id') { // Ignorar el ID
            //let valorDividido = Math.trunc(array[0][key] / 30);
            let valorDividido = array[0][key] / 30;
            nuevosValores[`consDMes${contador}`] = valorDividido;
            contador++;
        }
    }

    return nuevosValores;
}

let resultadoCD = DividirMes(consMensual);

//El objeto resultadoCD se agrega dentro de un arreglo que es consDiario
let consDiario = [resultadoCD];
console.log(consDiario);


// Función para obtener el array de consDiario
exports.getConsDiario = () =>{
    return consDiario;
};


// Funcion promedio Mensual
function PromMensual(consMensual) {
    let suma = 0;
    
    // Accedemos al primer objeto dentro del arreglo
    let objeto = consMensual[0];
    
    for (let key in objeto) {
        // Ignorar la propiedad 'id'
        if (key !== 'id') {
            suma += objeto[key] / 12; // Se suma y divide
        }
    }
    
    return suma;
}

// Ejecución de la función
let totalConsMes = PromMensual(consMensual);
console.log("Consumo promedio mensual: "+totalConsMes); // Imprime la suma total de todos los meses y divide entre 12



// Funcion promedio diario
function PromDiario(consDiario) {
    let suma = 0;
    
    // Accedemos al primer objeto dentro del arreglo
    let objeto = consDiario[0];
    
    for (let key in objeto) {
        // Ignorar la propiedad 'id'
        if (key !== 'id') {
            suma += objeto[key] / 12; // Sumamos los valores de los meses
        }
    }
    
    return suma;
}

// Ejecución de la función
let totalConsDia = PromDiario(consDiario);
console.log("Consumo promedio diario: "+totalConsDia); // Imprime la suma total de todos los meses y divide entre 12

// Variables
let hsp = 3.68;
let autcons = 0.05;
let facRendimiento = 0.80;
let potUniModulo = 0.630;

function PtFtv(totalConsDia, autcons, hsp, facRendimiento) {
    // Verifica que variable3 y variable4 no sean cero para evitar división por cero
    if (hsp === 0 || facRendimiento === 0) {
        return "Error: No se puede dividir por cero.";
    }
    
    // Realiza el cálculo
    const res_PtFtv = (totalConsDia * autcons) / (hsp * facRendimiento);
    return res_PtFtv;
}

const res_PtFtv = PtFtv(totalConsDia, autcons, hsp, facRendimiento);

//
function CantTotalModulos(res_PtFtv, potUniModulo) {
    // Verifica que variable3 y variable4 no sean cero para evitar división por cero
    if (res_PtFtv === 0 || potUniModulo === 0) {
        return "Error: No se puede dividir por cero.";
    }
    
    // Realiza el cálculo
    const res_CantTotalModulos = Math.floor(res_PtFtv / potUniModulo);
    return res_CantTotalModulos;
}

const res_CantTotalModulos = CantTotalModulos(res_PtFtv, potUniModulo);


function miniCuadro() {
    // Encabezados de las columnas
    console.log("       *** DIMENSIONAMIENTO CAMPO FV ***       ");
    console.log("-----------------------------------------------------");

    // Imprimir varias filas del cuadro
    console.log("Consumo promedio diario          | "+totalConsDia);
    console.log("Hora solar pico                  | "+hsp);
    console.log("Autoconsumo                      | "+autcons);
    console.log("Factor de rendimiento            | "+facRendimiento);
    console.log("Potencia fotovoltaica            | "+res_PtFtv);
    console.log("Potencia unitaria modulo FV      | "+potUniModulo);
    console.log("Cantidad total modulos FV        | "+res_CantTotalModulos);
}

// Llamar a la función
miniCuadro();
