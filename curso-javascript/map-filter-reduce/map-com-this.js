const maca = {
  value: 2,
};

const laranja = {
  value: 3,
};

function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

const nums = [1, 2];

console.log('this > maça: ', mapComThis(nums, maca));
console.log('this > laranja: ', mapComThis(nums, laranja));

//feito em aula com Stephany Nusch



// const orange = {
// 	price: 2,
// };

// const apple = {
// 	price: 1.5,
// };

// function mapArray() {
// 	const array = [1, 2, 3, 4, 5];

// 	return array.map(function (item) {
// 		return item * this.price;
// 	}, apple);
// }

// console.log(mapArray());