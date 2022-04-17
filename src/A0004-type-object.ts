const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Valor A',
  keyB: 'Valor B',
};

objectA.keyB = 'Outro Valor';

const objectB: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Valor A',
  keyB: 'Valor B',
};

objectB.keyB = 'Outro Valor';

const objectC: Record<string, unknown> = {
  keyA: 'Valor A',
  keyB: 'Valor B',
};

objectC.keyA = 'Outro Valor';
objectC.keyC = '';
