/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Class Getters & Setters
 * @tutorial {@link https://javascript.info/class#getters-setters}
 */

'use strict';

/**
 * Getters/setters are used as wrappers over "real" property values to gain more control over operations with them
 * The name is stored in name_ property, and the access is done via getter and setter
 * Technically, external code is able to access the name directly by using user.name
 * But there is a widely known convention that private properties 
 * should not be accessed from outside the object
 *
 * Technically, this class declaration works by creating getters and setters in User.prototype.
 */

class User {
  MIN_NAME_LENGHT = 4;  // A property in the class

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    console.log('The getter executing...');
    return this.name_;
  }

  set name(value) {
    console.log('The setter executing...');
    if (value.length < this.MIN_NAME_LENGHT) {
      console.log('Name is too short.');
      return;
    }
    this.name_ = value;
  }
}

let user = new User('John');
console.log(user.name);            // John
user = new User('');              // Name is too short.
