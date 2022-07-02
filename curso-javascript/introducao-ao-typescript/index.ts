// TRATANDO A TAG INPUT
// esse input não é só um HTMLElement (elemento genérico)
// é especificamente um HTMLInputElement (terei acesso as propriedades específicas desse elemento html)
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  // estou dizendo ao typescript q esse evento está ocorrendo em um elemento de input
  // assim terei acesso ao métodos do HTMLInputElement
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
})

// ---------- * --------- //

// Generic Types

function adicionaApendiceALista<T>(array: T[], valor: T) {
  return array.map(() => valor);
}

console.log(adicionaApendiceALista([1, 2, 3], 1));
console.log(adicionaApendiceALista(['a', 'b', 'c'], 'd'));