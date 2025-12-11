let num = [5, 8, 2, 9, 3];

console.log(`O vetor:`);
console.log(num);
console.log(`\nO vetor têm ${num.length} posições.`);
console.log(`O primeiro valor do vetor é ${num[0]}.`);
num.sort();
console.log(`\nO vetor ordenado:`);
console.log(num);
num.push(10);
console.log(`\nO vetor com a adição do número 10 utilizando o método "push": `);
console.log(num);

let pos = num.indexOf(5);
pos == -1 ? console.log(`\nO valor não foi encontrado no vetor.`) : console.log(`\nO valor está na posição ${pos}.`);