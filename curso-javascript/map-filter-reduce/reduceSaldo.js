const lista = [
  {
    name: 'sabão em pó',
    price: 30,
  },
  {
    name: 'cereal',
    price: 12,
  },
  {
    name: 'toalha',
    price: 30,
  },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce((acc, curr) => {
    return acc - curr.price;
  }, saldoDisponivel);
};

console.log(calculaSaldo(saldoDisponivel,lista));

//feito em aula com Stephany Nusch