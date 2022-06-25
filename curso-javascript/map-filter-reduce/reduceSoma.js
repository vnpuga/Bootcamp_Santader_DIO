function somaNumeros(arr) {
  if (!arr || !arr.length) return "array inválido";
  return arr.reduce((acc, curr) => {
    return acc + curr;
  })
}

const nums = [1, 2];

console.log(somaNumeros(nums));

//feito em aula com Stephany Nusch