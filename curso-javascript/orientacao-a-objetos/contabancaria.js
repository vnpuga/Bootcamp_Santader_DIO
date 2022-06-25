class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0; 
  }
  // usamos _saldo, p/q possamos usar o nome saldo no getter e setter.
  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if(valor > this._saldo) {
      return 'Operação negada, saldo insuficiente'
    }
    this._saldo = this._saldo - valor;

    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;

    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria{
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = 'corrente';
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

class ContaPoupança extends ContaBancaria{
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'poupança';
  }
}

class ContaUniversitaria extends ContaBancaria{
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'universitária';
  }

  sacar(valor) {
    if(valor > 500) {
      return 'Operação negada!';
    }

    this._saldo = this._saldo - valor;
  }
}

//feito em aula com Stephany Nusch
// para testar, usar console do navegador