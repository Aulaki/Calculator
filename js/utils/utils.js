const sumar = (a, b) => parseInt(a) + parseInt(b);
const restar = (a, b) => parseInt(a) - parseInt(b);
const multiplicar = (a, b) => parseInt(a) * parseInt(b);

const dividir = (a, b) => {
  let res = "No se puede dividir entre cero";
  if (parseInt(b) != 0) {
    res = parseInt(a) / parseInt(b);
  }
  return res;
};

//Buscamos símbolo
const getSimbol = (operation) => {
  let corte = null;
  let smbl = false;
  for (let i = 0; i < operation.length && !smbl; i++) {
    if (!isNaN(operation[i]) && isNaN(operation[i + 1])) {
      corte = i + 1;
      smbl = true;
    }
  }
  return corte;
};

//Comprobamos si los operadores son operables
const checkOperand = (a) => {
  let operable = false;
  for (let i = 0; i < a.length - 1; i++) {
    let j = 0;
    if (!isNaN(a[i + 1]) || a[j] == "+" || a[j] == "-") {
      operable = true;
    }
  }
  return operable;
};

//
const getResult = (operation) => {
  let simbol,
    num1,
    num2,
    corte = null;
  let res = "E";

  corte = getSimbol(operation);
  simbol = operation[corte];
  //Cortamos String podemos usar slice o substring
  num1 = operation.slice(0, corte);
  num2 = operation.slice(corte + 1);
  console.log(num1);
  console.log(num2);
  console.log(simbol);

  //Comprobamos si num1 y num 2 son operables y realizamos las operaciones
  if (!checkOperand(num1) && checkOperand(num2));
  {
    switch (simbol) {
      case "+":
        res = sumar(num1, num2);
        break;
      case "-":
        res = restar(num1, num2);
        break;
      case "*":
        res = multiplicar(num1, num2);
        break;
      case "/":
        res = dividir(num1, num2);
        console.log(res);
        res =
          !Number.isInteger(res) && res != "No se puede dividir entre cero"
            ? "clear"
            : res;
        break;
    }
  }
  if (Number.isNaN(res)) {
    res = "E";
  }
  return res;
};
