/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 20.feb.2020
 * @desc Overriding Properties
 */

'use strict';

function Werewolf(mood) {
  this.mood = mood;
}

let sadWerewolf = new Werewolf('sad');
let partyWerewolf = new Werewolf('partying');
console.log(partyWerewolf.mood);               // → partying

/** All constructors have a property named prototype
 *  We could use a constructor's prototype to add a howl method on every instance of Werewolf
 */
Werewolf.prototype.howl = function(thing) {
  console.log('Werewolf howls at the ' + thing + '.');
}
sadWerewolf.howl('moon');                      // →  Werewolf howls at the moon.
partyWerewolf.howl('bowl of chips');          // →  Werewolf howls at the bowl of chips.


/** 
 *  If you add a property directly to an object, it is added to the object itself, not the object's prototype
 */
Werewolf.prototype.clothing = 'tattered shirt';
console.log(partyWerewolf.clothing);          // →  tattered shirt

partyWerewolf.clothing = 'backwards cap';
console.log(partyWerewolf.clothing);          // →  backwards cap
console.log(sadWerewolf.clothing);            // →  tattered shirt


/** Let's override the inherited toString() method
 *  The string representation of the werewolf object should be [mood] werewolf
 */
console.log(partyWerewolf);                    // →  Werewolf { mood: 'partying', clothing: 'backwards cap' }
Werewolf.prototype.toString = function() {
  return this.mood + ' werewolf';
};

// If we concatenate partyWerewof + '' It will use the toString() method to convert the object
console.log(partyWerewolf + '');              // →  partying werewolf
