const empresas = ['LG', 'ATMA', 'GARBARINO'];
const fundaciones = [1970, 1980, 2000];
const cantEmpleados = [1000, 800, 900];
const cantSucursales = [500, 300, 200];

console.log(
  'Empresa',
  empresas[0],
  'Fundacion',
  fundaciones[0],
  'cant. empleados',
  cantEmpleados[0]
);

empresas.forEach(mostrarEmpresa);

function mostrarEmpresa(empresa, index) {
  console.log(empresa.toLowerCase(), fundaciones[index], cantEmpleados[index]);
}
