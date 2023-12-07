/* 1.Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador. */
alert('Hello Word');

 /* 2.Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.*/ 
let value1 = 32;
let value2 = 27;

const calc = value1 + value2;
alert(`A soma dos dois valores é ${calc}.`);

/* 3.Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número". */
let value3 = 59;
let value4 = 35;

if (typeof(value3) == "number") {
  alert("É um número.");
} else {
  alert("Não é um número");
}

/* 4.Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".*/
let value5 = 39;

if (typeof(value5) == "string") {
  alert("É uma string.");
} else {
  alert("Não é uma string.");
}

/* 5.Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".*/
let value6 = false;

if (typeof(value6) == "boolean") {
  alert("É um booleano.");
} else {
  alert("Não é um booleano.");
}

/* 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.*/
const subtraction = value1 - value2;
alert(`O resultado da subtração dos valores é ${subtraction}.`);

/* 7.Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.*/
const multiplication = value1 * value2;
alert(`O resultado da multiplicação dos valores é ${multiplication}.`);

/* 8.Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.*/
const division = value1 / value2;
alert(`O resultado da divisão dos valores é ${division.toFixed(2)}.`);

/* 9.Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par". */
let value7 = 29;

if (value7 % 2 == 0) {
  alert("É um número par.");
} else {
  alert("Não é um número par.")
}

/* 10.Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".*/

if (value7 % 2 == 0) {
  alert("É um número impar.");
} else {
  alert("É um número impar.")
}