//.1 Impuestos
export default class Impuestos {
    constructor(ventas_monto_bruto_anual, deducciones) {
        this._ventas_monto_bruto_anual = ventas_monto_bruto_anual;
        this._deducciones = deducciones;
    }
    get montoBruto() {
        return this._ventas_monto_bruto_anual;
    }
    get deducciones() {
        return this._deducciones;
    }
    set montoBruto(montoAnualNuevo) {
        this._ventas_monto_bruto_anual = montoAnualNuevo;
    }
    set deducciones(deduccionesNuevas) {
        this._deducciones = deduccionesNuevas;
    }
}