// Utilizar any em último caso
function showMessage(msg: any) {
  return msg;
}

// Dá para passar qualquer coisa

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));
