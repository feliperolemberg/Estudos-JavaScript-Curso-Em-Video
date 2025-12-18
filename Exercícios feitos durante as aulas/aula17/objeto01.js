// Criação de um objeto
let amigo = {nome: 'José', 
sexo: 'Masculino', 
peso: 85.4, 
engordar(p = 0){
  console.log('Engordou');
  this.peso += p;
}};

amigo.engordar(2);
console.log(`O ${amigo.nome} pesa ${amigo.peso} quilos.`);