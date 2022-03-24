"use strict";

let op = prompt("Ingresa un numero del 1 al 4: ", 1);

console.log("op: ", op);
switch (op) {
  case "1":
    dibujo();
    break;
  case "2":
    dibujoMouse();
    break;
  case "3":
    dibujoInput();
    break;
  case "4":
    dibujoTeclado();
    break;
  default:
    document.getElementById("title").innerHTML = "¡Opción invalida!";
    break;
}

function dibujo() {
  document.getElementById("title").innerHTML = "¡Dibujo!";

  let c = document.getElementById("lienzo");
  let ctx = c.getContext("2d");
  const nLineas = 45;
  let xi, yi, xf, yf;
  let colorsito = "skyblue";

  for (let l = 0; l < nLineas; l++) {
    yf = yi = 10 * l;
    xi = 10 * (l + 1);
    xf = 450 - l * 10;
    dibujarLinea(colorsito, xi, 0, 450, yf, ctx);
    dibujarLinea(colorsito, 0, xi, yf, 450, ctx);
    dibujarLinea(colorsito, 450, yi, xf, 450, ctx);
    dibujarLinea(colorsito, yi, 0, 0, xf, ctx);
  }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoMouse() {
  console.log("++");
  document.getElementById("title").innerHTML = "¡Mueve el mouse!";
}

function dibujoInput() {
  document.getElementById("title").innerHTML = "¡Ingresa un numero!";
  let nLineas = prompt("Ingresa el número de líneas a pintar: ", 45);
  while (!Number.isInteger(parseInt(nLineas))) {
    nLineas = prompt("Ingresa el número de líneas a pintar: ", 45);
  }

  let c = document.getElementById("lienzo");
  let ctx = c.getContext("2d");
  let xi, yi, xf, yf;
  let colorsito = "skyblue";

  for (let l = 0; l < nLineas; l++) {
    yf = yi = 10 * l;
    xi = 10 * (l + 1);
    xf = 450 - l * 10;
    dibujarLinea(colorsito, xi, 0, 450, yf, ctx);
    dibujarLinea(colorsito, 0, xi, yf, 450, ctx);
    dibujarLinea(colorsito, 450, yi, xf, 450, ctx);
    dibujarLinea(colorsito, yi, 0, 0, xf, ctx);
  }
}

function dibujoTeclado() {
  console.log("++++");
  document.getElementById("title").innerHTML = "¡Mueve las fechas del teclado!";
}
