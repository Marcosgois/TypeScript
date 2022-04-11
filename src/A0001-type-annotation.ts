/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-desable */

// Tipos Básicos (Inferência de Tipos)

let nome: string = 'Marcos'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true or false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 30,
  nome: 'Luiz',
};

// Funções

function soma(x: number, y: number): number {
  return x + y;
}

let soma2: (x: number, y: number) => number = (x, y) => x + y;
