// Array<T> -> Generic with any type you want = T[]

export function mulArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

export function concatString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = mulArgs(1, 2, 3);
const resultConcat = concatString('1', '2', '3');
const resultToUpper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(resultConcat);
console.log(resultToUpper);
