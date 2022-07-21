// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')
console.log("Sua idade é maior do que a do seu melhor amigo", minhaIdade > idadeAmiga);
console.log(minhaIdade - idadeAmiga);

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

!b && d; //Não sou maior de idade e quero passear de carro
(b && a) && !d; //Sou maior de idade e vou para a praia, e não quero passear de carro
a || d; //Vou para praia ou quero passear de carro
c && !d; //Posso tomar uma cervejinha e não vou passear de carro