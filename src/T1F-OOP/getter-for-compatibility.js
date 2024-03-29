/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 13.Mar.2021
 * @desc Using getters for compatibility
 *       Imagine we started implementing User objects using data properties name and age
 *       ... But sooner or later, things WILL change:
 *       Instead of age we may decide to store birthday, because it’s more precise and convenient
 *       Now what to do with the old code that still uses age property?
 *       Adding a getter for age solves the problem
 *
 *       Object.defineProperty() defines a new property directly on an object, 
 *       or modifies an existing property on an object, and returns the object.
 *
 * @see {@link * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty}
 * @see {@link https://javascript.info/property-accessors#using-for-compatibility}
 */

'use strict';

function User(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User('John', 25);
console.log(john.age); // 25

// ///////////////////////////////////
/*
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let john = new User('John', new Date(1992, 6, 1));
*/
// ///////////////////////////////////
/*
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, 'age', {
    get() {
      const TODAY_YEAR = new Date().getFullYear();
      return TODAY_YEAR - this.birthday.getFullYear();
    }
  });
}

let john = new User('John', new Date(1992, 6, 1));
console.log(john.birthday); // birthday is available
console.log(john.age);      // ...as well as the age
*/
