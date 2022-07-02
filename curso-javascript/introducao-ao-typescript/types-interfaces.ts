// exemplos

// função com typescript
function soma (a: number, b: number) {
  return a + b;
};

console.log(soma(1, 2));

// -------- * ---------- //
// types e interfaces

interface Ianimal {
  nome: string;
  tipo: 'terrestre' | 'aquáticos'; // o operador ou é indicado por apenas 1 pipe |
  domestico: boolean;
}
// exemplo type
// type IAnimal = {
//   nome: string;
//   tipo: 'terrestre' | 'aquáticos'; // o operador ou é indicado por apenas 1 pipe |
//   executarRugido(alturaEmDecibies: number): void;
// }

interface Ifelino extends Ianimal {
  visaoNoturna: boolean;
}

interface Icanino extends Ianimal {
  porte: 'pequeno' | 'médio' | 'grande';
}

type Idomestico = Ifelino | Icanino; // pode ser | ou &

const animal: Idomestico = {
  porte: 'médio',
  nome: 'cachorro',
  tipo: 'terrestre',
  domestico: true,
  // visaoNoturna: '' // o Icanino só extends Ianimal, por isso não posso colocar propriedade do Ifelino
}

const felino: Ifelino = {
  nome: 'Leao',
  tipo: 'terrestre',
  visaoNoturna: true,
  domestico: false,
}

// const animal: Ianimal = {
//   nome: 'Elefante',
//   tipo: 'terrestre',
//   domestico: false,
// }

// -------- * ---------- //

// desenvolvendo condicionais a partir de parâmetros

interface IUsuario {
  id: string,
  email: string,
}

interface IAdmin extends IUsuario {
  cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
  if('cargo' in usuario) {
    // redirecionar para a área de administração.
  }
  // redirecionar para a área de usuario.
}

// -------- * ---------- //

// utilizando o caracter "?" para variáveis opcionais
// qdo uso ? transforma o item em um dado opcional (pode ou não estar definido)

interface IUsuario {
  id: string,
  email: string,
  cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecionar(usuario: IUsuario) {
  if(usuario.cargo) {
    // redirecione(usuario.cargo);
  }
  //redirecionar para área do usuário.
}

// -------- * ---------- //

// criando variaveis com propriedades 'readonly' e 'private'.

interface Cachorro {
  nome: string,
  idade: number,
  parqueFavorito?: string,  // valor opcional, pode ou não ter um parque favorito.
}


// iterando os valoresde Cachorro e dizendo q serão apenas para leitura
// -?, ele remove os valores opcionais
type CachorroSomenteLeitura = {
  readonly [k in keyof Cachorro]-?: Cachorro[k];
}

class MeuCachorro implements CachorroSomenteLeitura {
  idade;
  nome;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro('Apolo', 14);


// -------- * ---------- //
// uso do Omit
//https://www.typescriptlang.org/docs/handbook/utility-types.html

interface Pessoa {
  nome: string;
  idade: number;
  nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}
const brasileiro: Brasileiro {
  // aqui ele só aparecerá as opções nome e idade
}