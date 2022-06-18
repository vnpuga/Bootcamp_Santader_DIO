//solucao1
function verificaPalindromo(string) {
  if(!string) return "string inexistente";

  return string.split("").reverse().join("") === string;
}
// console.log(verificaPalindromo(""));


//solucao2
function verificaPalindromo2 (string) {
  if(!string) return "string inexistente";

  for (let i = 0; i < string.length / 2; i += 1) { //1
    if(string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(verificaPalindromo2("abba"));

//1: não precisamos percorrer a string inteira, pq vamos comparar 2 caracteres a cada loop, o indice 0 com último indice, o indice 1 com o penultimo indice e assim sucessvamente. 

//by Stephany Nusch
