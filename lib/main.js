"use strict";

var _cliente = _interopRequireDefault(require("./modules/cliente.js"));

var _impuestos = _interopRequireDefault(require("./modules/impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 2.
// 1.
// 3. Ejecución
var impuestos2021 = new _impuestos["default"](100, 40);
var c1 = new _cliente["default"]('Rodrigo', impuestos2021);
console.log("Cliente: ".concat(c1._nombre));
console.log("Ventas 2021: ".concat(impuestos2021._ventas_monto_bruto_anual));
console.log("Deducciones 2021 : ".concat(impuestos2021._deducciones));
c1.calcularImpuesto();