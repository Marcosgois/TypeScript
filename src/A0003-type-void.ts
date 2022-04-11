function withoutReturn(...args: string[]): void {
  console.log(args.join(' '));
}

withoutReturn('Olá', 'Mundo');

const person = {
  name: 'Marcos',
  lastname: 'Gois',

  showName(): void {
    console.log(this.name + ' ' + this.lastname);
  },
};

withoutReturn('Marcos', 'Gois');
person.showName();

export { person };
