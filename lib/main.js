"use strict";

var _impuestos = _interopRequireDefault(require("./modules/impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 1.
// 2.
// 3. Ejecución
var impuestos2021 = new _impuestos["default"](100, 40);
var c1 = new _impuestos["default"]('Rodrigo', impuestos2021);
c1.calcularImpuesto();