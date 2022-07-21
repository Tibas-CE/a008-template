//CODIGO AQUI
//OPERADORES ARITMÉTRICOS
console.log("OPERADORES ARITMÉTRICOS");

let saldo;
saldo = 15;
saldo += 22.40; //que e o mesmo (saldo + 22,40)
console.log("soma", saldo);
saldo -= 12.34; //saldo + 12.34
console.log("subtração", saldo);
saldo /= 3; // saldo / 3
console.log("divisão", saldo);
saldo *= 3.42; //saldo * 3.42
console.log("multiplicação", saldo);
saldo %= 3; //saldo % 3, resto da divisão(dividir o saldo por 3 pessoas)
console.log("resto", saldo);

//PRECEDÊNCIA MATEMÁTICA
console.log("PRECEDÊNCIA MATEMÁTICA");

const sequenciaDeOperacao = 2*2+2;
console.log("SDO", sequenciaDeOperacao);
const sequenciaDeOperacao1 = 2*(2+2);
console.log("SDO1", sequenciaDeOperacao1);

//OPERADORES RELACIONAIS (igual e diferente)
console.log("IGUAL E DIFERENTE");

const resultado = 5===5
console.log("R", resultado);
const resultado1 = 5!==5
console.log("R1", resultado1);
const resultado2 = 5!=="5"
console.log("R2", resultado2);
const resultado3 = "5"==="cinco"
console.log("R3", resultado3);
const resultado4 = typeof 5 === typeof 20
console.log("R4", resultado4);
const resultado5 = typeof "5" === typeof "cinco"
console.log("R5", resultado5);

//MENOR E MAIOR
console.log("MENOR E MAIOR");

const number1 = 8
const number2 = 6

console.log("O primerio numero é igual ao segundo?", number1 === number2);
console.log("O primerio numero é menor ou igual ao segundo?", number1 <= number2);
console.log("O primerio numero é maior ao segundo?", number1 > number2);
console.log("O primerio numero é menor ao segundo?", number1 < number2);

//OPERADORES LÓGICOS
console.log("OPERADORES LÓGICOS");

const a= "Quero dirigir um Celta 2012";
const b= "Sou maior de idade";
const c= "Consigo comprar um Celta por 22.000";
const d= "consigo alugar o Celta";
const e= "Tenho carteira de motorista?";

a; //quero dirigir o Celta
!b; //Não sou maior de idade
b && !e; //Sou maior de idade e não tenho carteira de motorista 
b && (c || d); //Sou maior de idade e consigo comprar ou alugar o Celta
(b && e) && !a; //Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta 