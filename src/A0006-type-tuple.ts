const dadosCliente1: [number, string] = [1, 'Marcos'];
const dadosCliente2: [number, string, string] = [1, 'Marcos', 'Gois'];
const dadosCliente3: [number, string, string?] = [1, 'Marcos', 'Gois'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Marcos', 'Gois'];
const dadosCliente5: readonly [number, string, ...string[]] = [
  1,
  'Marcos',
  'Gois',
];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Gois';
// Permite mudar a tupla! Até realizar .pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3); // Possui um opicional! Pode ser o tipo ou undefined
console.log(dadosCliente4); // Funcionamento parecido com um Array
console.log(dadosCliente5); // Não pode modificar, apenas leitura (Imutável)

// readonly
const array1: readonly string[] = ['Marcos', 'Gois'];
const array2: ReadonlyArray<string> = ['Marcos', 'Gois'];

console.log(array1);
console.log(array2);
