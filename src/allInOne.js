//.1 Impuestos
class Impuestos {
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

//.2 Cliente
class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombreNuevo) {
        this._nombre = nombreNuevo;
    }

    calcularImpuesto() {
        console.log((this._impuesto.montoBruto - this._impuesto.deducciones) * 0.21)
    }
}

// 3. Ejecución
let impuestos2021 = new Impuestos(100, 40);
let c1 = new Cliente('Rodrigo', impuestos2021);
c1.calcularImpuesto();
