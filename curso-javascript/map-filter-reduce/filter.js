const nums = [1, 3, 5, 22, 56, 79, 98];

const filterPares = (arr) => {
  return arr.filter((item) => item % 2 === 0);
}

console.log(filterPares(nums));

//feito em aula com Stephany Nusch


function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 === 0;
};

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filterPares(meuArray));