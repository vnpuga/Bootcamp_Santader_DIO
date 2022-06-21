const meuArray = [30, 30, 40 , 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
  const mySet = new Set(arr)
  return [...mySet]; // retorna um array c/ cada elemento do set
}

console.log(valoresUnicos(meuArray)); //[ 30, 40, 5, 223, 2049, 3034 ]

//feito em aula com Stephany Nusch