/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
  * @desc JS Events. OO Present Class
  */

'use strict';

/** 
  * @class
  * @desc Represents a present 
  *       Each present has an original image. When it is clicked, it is replaced
  *       with a (new) present image.
  */
class Present {
  /** @private */
  #containerElement; /** The The DOM element that will host the present image */

  /**
   * @constructor
   * @desc Sets up a present object (new image) placing it in the page (DOM)
   * @param {object} containerElement - The DOM element that will host the present (image)
   */
  constructor(containerElement) {
    this.#containerElement = containerElement;

    // Create image and append to container.
    let image = document.createElement('img');
    image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
    image.addEventListener('click', this.#openPresent);
    this.#containerElement.append(image);
  }

  /**
   * @method
   * @desc Listener. Changes the DOM with the new image and removes the listener
   * @param {object} event - Event object 
   */
  #openPresent = (event) => {
    const image = event.currentTarget;
    image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif'; // The new image
    image.removeEventListener('click', this.#openPresent);
  }
}
