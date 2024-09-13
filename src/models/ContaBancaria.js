"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria() {
        this._saldo = 0;
        this._numero = "00000-0";
        this._agencia = "0000-0";
    }
    Object.defineProperty(ContaBancaria.prototype, "numero", {
        /*
            GETTER/SETTER PARA NUMERO
        
        */
        get: function () {
            return this._numero;
        },
        set: function (valor) {
            var regex = /^\d{5}-\d{1}$/;
            if (regex.test(valor)) {
                this._numero = valor;
            }
            else {
                console.log('Formato inválido');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaBancaria.prototype, "agencia", {
        /*
              GETTER/SETTER AGENCIA
        
        */
        get: function () {
            return this._agencia;
        },
        set: function (valor) {
            var regex = /^\d{4}-\d{1}$/;
            if (regex.test(valor)) {
                this._agencia = valor;
            }
            else {
                console.log('Formato invalido');
            }
        },
        enumerable: false,
        configurable: true
    });
    ContaBancaria.prototype.consultar_saldo = function () {
        return this._saldo;
    };
    ContaBancaria.prototype.depositarValor = function (valor) {
        if (valor > 0) {
            this._saldo += valor;
            return true;
        }
        else {
            return false;
        }
    };
    ContaBancaria.prototype.sacarValor = function (valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    };
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
