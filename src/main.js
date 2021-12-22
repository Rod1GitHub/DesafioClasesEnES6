// 2.
import Cliente from './modules/cliente.js';

// 1.
import Impuestos from './modules/impuestos.js';


// 3. Ejecución
let impuestos2021 = new Impuestos(100, 40);
let c1 = new Cliente('Rodrigo', impuestos2021);
console.log(`Cliente: ${c1._nombre}`)
console.log(`Ventas 2021: ${impuestos2021._ventas_monto_bruto_anual}`)
console.log(`Deducciones 2021 : ${impuestos2021._deducciones}`)
c1.calcularImpuesto()

