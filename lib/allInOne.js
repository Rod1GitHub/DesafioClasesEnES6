"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

//.1 Impuestos
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(ventas_monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuestos);

    this._ventas_monto_bruto_anual = ventas_monto_bruto_anual;
    this._deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "montoBruto",
    get: function get() {
      return this._ventas_monto_bruto_anual;
    },
    set: function set(montoAnualNuevo) {
      this._ventas_monto_bruto_anual = montoAnualNuevo;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(deduccionesNuevas) {
      this._deducciones = deduccionesNuevas;
    }
  }]);

  return Impuestos;
}(); //.2 Cliente


var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nombreNuevo) {
      this._nombre = nombreNuevo;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      console.log((this._impuesto.montoBruto - this._impuesto.deducciones) * 0.21);
    }
  }]);

  return Cliente;
}(); // 3. Ejecución


var impuestos2021 = new Impuestos(100, 40);
var c1 = new Cliente('Rodrigo', impuestos2021);
c1.calcularImpuesto();