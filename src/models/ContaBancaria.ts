export class ContaBancaria{
    private _saldo:number;
    private _numero:string;
    private _agencia:string;



    constructor(){
        this._saldo = 0
        this._numero = "00000-0"
        this._agencia = "0000-0"
    }
/*        
    GETTER/SETTER PARA NUMERO

*/
    get numero():string{
        return this._numero
    }

    set numero(valor:string){
        const regex = /^\d{5}-\d{1}$/
        if(regex.test(valor)){
            this._numero = valor
        }else{
            console.log('Formato inválido')
        }

    }

/*
      GETTER/SETTER AGENCIA

*/

get agencia():string{
    return this._agencia
}

set agencia(valor:string){
    const regex = /^\d{4}-\d{1}$/
    if(regex.test(valor)){
        this._agencia = valor
    }else{
        console.log('Formato invalido')
    }
}




    consultar_saldo(){
        return this._saldo
    } 

    depositarValor(valor:number):boolean{
        if(valor>0){this._saldo += valor
            return true
        }
        else{
            return false
        }
    }


    sacarValor(valor:number):boolean{
        if(valor <= this._saldo){
            this._saldo -= valor
            return true
        }else{
            return false
        }
        
    }

}