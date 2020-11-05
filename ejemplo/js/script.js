
//---------------------Creacion de objetos literares-------------
/*let naveEspacial = {
   'tipo combustible' : 'turbosina',
   color: 'gris'
};*/
// ----------------propiedades de objetos literarles-------------------------
/*
let factura = {
   numero : 100,
   cliente: 'Bimbo',
   subTotal: 1543.00,
   iva: 154.30
};

let  numFact = factura.numero; 
let  factCliente = factura.cliente;   

let total = factura.subTotal + factura.iva;

console.log('La factura '+ numFact + ' es del cliente: ' + factCliente + ' por un monto de ' + (factura.subTotal + factura.iva));   // La factura 100 es del cliente: Bimbo por un monto de 1697.3


factura.subTotal = 2543.00;
factura.iva = 254.30;

console.log('La factura '+ numFact + ' es del cliente: ' + factCliente + ' por un monto de ' + (factura.subTotal + factura.iva));   // La factura 100 es del cliente: Bimbo por un monto de 2797.3


console.log(factura.fecha); //undefined
//------------------------------Notacion[]------------------------
/*let naveEspacial = {
    'Tipo Combustible': 'Turbosina' ,
    'En activo': true ,
    planeta : 'Tierra' ,
    totalTripulacion: 5
};

console.log(naveEspacial['En activo']);  // true

console.log(naveEspacial['Tipo Combustible']);  // 'Turbosina'

console.log(naveEspacial['totalTripulacion']);  // 5

console.log(naveEspacial['!!!!!!!!!!!!!!!' ]);  // undefined

let cualquierPropiedad = (objeto, propiedad) => objeto[propiedad];
console.log(cualquierPropiedad(naveEspacial, 'planeta'));    //Tierra
*/
//----------Asignacion de propiedades-------------------------------
/*
const naveEspacial = {tipo: 'cohete'};
naveEspacial = {tipo: 'alien'};   // TypeError: Assignment to constant variable.
naveEspacial.tipo = 'alien';       // cambia el valor de la propiedad tipo
naveEspacial.velocidad = '5';    // crea la clave 'velocidad' con el valor '5'
console.log(naveEspacial);       // { tipo: 'alien', velocidad: '5' }
delete naveEspacial.velocidad;
console.log(naveEspacial);    // { tipo: 'alien' }

//--------------------Metodos de objetos literales---------
/*
let factura = {
   numero : 100,
   cliente: 'Bimbo',
   subTotal: 1543.00,
   iva: 154.30,
   total: function(){ 
      return this.subTotal + this.iva;
   }
};

console.log('La factura '+ factura.numero + ' es del cliente: ' + factura.cliente + ' por un monto de ' + factura.total());   // La factura 100 es del cliente: Bimbo por un monto de 1697.3


let factura = {
   numero : 100,
   cliente: 'Bimbo',
   subTotal: 1543.00,
   iva: 154.30,
   total: function(descuento=0){ 
      return this.subTotal + this.iva - descuento;
   }
};

console.log('La factura '+ factura.numero + ' es del cliente: ' + factura.cliente + ' por un monto de ' + factura.total(100));   // La factura 100 es del cliente: Bimbo por un monto de 1597.3


let factura = {
   numero : 100,
   cliente: 'Bimbo',
   subTotal: 1543.00,
   iva: 154.30,
   total: calculaTotal
};

function calculaTotal(descuento = 0){

   return this.subTotal + this.iva - descuento;

}

console.log('La factura '+ factura.numero + ' es del cliente: ' + factura.cliente + ' por un monto de ' + factura.total(100));   // La factura 100 es del cliente: Bimbo por un monto de 1597.3

const naveExtraterrestre = {
     invadir () {
          console.log('Hemos llegado para dominar la tierra.')
     }
};
naveExtraterrestre.invadir();

//--------------------------OBJETOS ANIDADOS------------------
/*
let naveEspacial = {
    pasajeros: [{nombre: 'Perro espacial'}],
    telescopio: {
        construido: 2018,
        modelo: "91035-XLT",
        longitudEnfoque: 2056
    },
    tripulacion: {
        capitan: {
            nombre: 'Sandra',
            grado: 'Ingeniera en Ciencias',
            frase() { console.log('Siempre adelante y lo lograremos!') },
            'alimentos preferidos': ['galletas', 'pasteles', 'dulces', 'espinacas'] }
        },
    motor: {
        modelo: "Moto2000"
    },
    nanoelectronica: {
        computadora: {
            terabytes: 100,
            monitores: "HD"
        },
        'back-up': {
            bateria: "Litio",
            terabytes: 50
        }
    }
};

console.log(naveEspacial.pasajeros[0]);
console.log(naveEspacial.pasajeros[0].nombre);
let aliFav = naveEspacial.tripulacion.capitan['alimentos preferidos'];
console.log(aliFav[2]);
let backTera = naveEspacial.nanoelectronica['back-up'].terabytes;
console.log(backTera);
*/
//-------------PASO POR REFERENCIA--------------------
/*
const nave = {
    planeta : 'Tierra',
    color : 'plateado'
};

let pintar = obj => {
    obj.color = 'dorado'
};

pintar(nave);

console.log(nave.color)

//-------------------ITERACIÓN EN OBJETOS---------------------------

let nave = {
    tripulacion: {
        capitan: {
            nombre: 'Lily',
            grado: 'Ingeniera en Ciencias',
            frase() {
                console.log('lo lograste!')
            }
        },
        'oficial en jefe': {
            nombre: 'Daniel',
            grado: 'Ingeniero Aeroespacial',
            respuesta() {
                console.log('De acuerdo, Capitan!')
            }
        },
        medico: {
            nombre: 'Clemente',
            grado: 'Fisico',
            frase() {
                console.log(`Perfecto`)
                }
            },
        traductor: {
            nombre: 'Samuel',
            grado: 'Ciencias Biologicas',
            frase() {
                console.log('Estamos completos')
            }
        }
    }
};
for (let miembro in nave.tripulacion) {
console.log(`${miembro}: ${nave.tripulacion[miembro].nombre}`)
};

for (let miembro in nave.tripulacion) {
console.log(`${nave.tripulacion[miembro].nombre}: ${nave.tripulacion[miembro].grado}`)
};*/