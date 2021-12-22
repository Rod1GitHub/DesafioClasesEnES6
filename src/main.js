// 1.
import Impuestos from './modules/impuestos.js';
// 2.

import Cliente from './modules/impuestos.js';

// 3. Ejecución
let impuestos2021 = new Impuestos(100, 40);
let c1 = new Cliente('Rodrigo', impuestos2021);
c1.calcularImpuesto();
