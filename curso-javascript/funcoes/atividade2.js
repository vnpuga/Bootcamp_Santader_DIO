// usar métodos call e aplly para modificar ovalor de this.

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Maria',
	idade: 30,
};

const pessoa2 = {
	nome: 'Carla',
	idade: 26,
};

const animal = {
	nome: 'Fiona',
	idade: 5,
  raca: 'Pug',
};

console.log(calculaIdade.call(pessoa2, 30)); //Daqui a 30 anos, Carla terá 56 anos de idade.
console.log(calculaIdade.call(animal, 7)); //Daqui a 7 anos, Fiona terá 12 anos de idade.
console.log(calculaIdade.apply(animal, [4])); //Daqui a 4 anos, Fiona terá 9 anos de idade.
console.log(calculaIdade.apply(pessoa1, [4])); //Daqui a 4 anos, Maria terá 34 anos de idade.


//feito em aula com Stephany Nusch