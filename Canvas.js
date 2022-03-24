"use strict";

let op = prompt("Ingresa un numero del 1 al 4: ", 1);
let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
let x = 225;
let y = 225;

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
  const colorsito = "skyblue";

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
  const colorsito = "skyblue";

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
  document.getElementById("title").innerHTML = "¡Mueve las fechas del teclado!";
  document.addEventListener("keydown", dibujarTeclado);
  console.log('Hola');
}

function dibujarTeclado(evento){
  console.log('F');
  let c = document.getElementById("lienzo");
  let ctx = c.getContext("2d");
  let color = "skyblue";
  const movimiento = 5;

  switch(evento.keyCode){
    case teclas.UP:
      dibujarLinea(color, x, y, x, y - movimiento, ctx);
      y -= movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(color, x, y, x, y + movimiento, ctx);
      y += movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(color, x, y, x - movimiento, y, ctx);
      x -= movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(color, x, y, x + movimiento, y, ctx);
      x += movimiento;
    break;
  }
}
