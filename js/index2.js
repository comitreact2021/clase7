/* const empresas = [
  ['LG', 1970, 1000, 500],
  ['ATMA', 1980, 800, 300],
  ['GARBARINO', 2000, 900, 200],
]; */

/* console.log(empresas[1][1]); */

// OBJETOS - JSON

const empresas = [
  {
    nombre: 'LG',
    fundacion: 1970,
    empleados: [
      {
        nombre: 'Pepe',
        dni: '12345678',
        salario: 200000,
        telefonos: [{ numero: '12314563', tipo: 'personal' }],
      },
      { nombre: 'Linus', dni: '87654321', salario: 300000 },
    ],
    cantSucursales: 500,
  },
  {
    nombre: 'ATMA',
    fundacion: 1980,
    empleados: [{ nombre: 'Elon', dni: '88525695', salario: 2000000000 }],
    cantSucursales: 300,
  },
  {
    nombre: 'GARBARINO',
    fundacion: 2000,
    empleados: [{ nombre: 'Steve', dni: '12525695', salario: 500000 }],
    cantSucursales: 200,
  },
];

empresas[0].empleados[0].telefonos[0].numero = '99999999';

empresas.push({
  nombre: 'SAMSUNG',
  fundacion: 1990,
  empleados: [{ nombre: 'Steve', dni: '12525695', salario: 500000 }],
  cantSucursales: 200,
});

console.log(empresas);

console.log('Cantidad de empleados de LG', empresas[0].empleados.length);

const cantSucursalesAtma = empresas[1].cantSucursales;
const cantSucursalesLg = empresas[0].cantSucursales;

console.log(cantSucursalesAtma + cantSucursalesLg);

const divContenido = document.getElementById('contenido');

empresas.forEach(mostrarEmpresa);

function mostrarEmpresa(empresa) {
  divContenido.innerHTML += '<p>' + empresa.nombre + '</p>';
}
