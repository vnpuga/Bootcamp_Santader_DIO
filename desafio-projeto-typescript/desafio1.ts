// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

let employee: {
  code: number,
  name: string,
}
employee.code = 10;
employee.name = 'John';


let employee2: {code: number, name: string} = {
  code: 10,
  name: 'John',
}

// com interface  
interface IEmployee {
  code: number,
  name: string,
}

const employee3: IEmployee = {
  code: 10,
  name: 'John'
}
console.log(employee)