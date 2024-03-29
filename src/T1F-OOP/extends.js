/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc The extends keyword
 *       The syntax to extend another class is:
 *         class Child extends Parent
 * @tutorial {@link https://javascript.info/class-inheritance#the-extends-keyword}
 */

'use strict';

/**
 * Internally, extends keyword works using the prototype mechanics:
 * It sets Rabbit.prototype.[[Prototype]] to Animal.prototype. 
 * So, if a method is not found in Rabbit.prototype, JavaScript takes it from Animal.prototype.
*/
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

/** Rabbit is a subclass or derived class */
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let animal = new Animal('My animal');
let rabbit = new Rabbit('White Rabbit');

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
