function validaArray(arr, num) {
  try {
    if(!arr && !num) throw new ReferenceError('Envie os parâmetros');

    if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');
    
    if(typeof num !== 'number') throw new TypeError('Num precisa ser do tipo number');
    
    if(arr.length !== num) throw new RangeError('Tamanho inválido');  

    return arr;  

  } catch (error) {
    if(error instanceof ReferenceError) {
      console.log('Este é um ReferenceError!');
      console.log(error.message);
    } else if(error instanceof TypeError) {
      console.log('Este é um TypeError!');
      console.log(error.message);
    } else if(error instanceof RangeError) {
      console.log('Este é um RangeError!');
      console.log(error.message);
    } else {
      console.log('Tipo de erro não esperado' + error);
    }
  }
};

// console.log(validaArray());
// console.log(validaArray(5,5));
// console.log(validaArray([], 'a'));
// console.log(validaArray([], 5));
console.log(validaArray([1, 2, 3, 4, 5], 5));



//feito em aula com Stephany Nusch