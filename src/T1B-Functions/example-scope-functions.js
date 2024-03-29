/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 16.ene.2020
  * @desc Scope and functions
  *
  */

'use strict';

let myVar = 'hi!';         // hello... I'm a global variable

const func1 = function() {
  let myVar = 'from func1';
};

const func2 = function() {
  myVar = 'from func2';
};

function main() {
  console.log(myVar)
  func1();
  console.log(myVar);
  func2();
  console.log(myVar);
}

main();
