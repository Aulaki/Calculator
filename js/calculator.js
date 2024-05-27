let ulti = false;

//Intoduce elementos recibidos por el input boton en el input texto
// si venimos de obtener un resultado limpia la pantalla antes de introducir
let addElement = (value) => {
  if(ulti){
    clearScreen();
  }
  document.getElementById("screen").value += value;
};

//limpia la caja de texto
let clearScreen = () => {
  document.getElementById("screen").value = "";
  ulti = false;
};

//llama a los metodos para realizar las operaciones y lo devuelve por pantalla
let calculate = () => {
  let res = "E";

  let operation = document.getElementById("screen").value;
  res = getResult(operation);
  if (res == "clear") {
    clearScreen();
  } else {
    document.getElementById("screen").value = res;
    ulti = true;
  }

  console.log(operation);
  console.log(res);
};
