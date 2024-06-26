/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description OO Multiple Present application
 *              communication between App and Present objects is implemented using custom events
 */

/**
 * @class
 * @description Present Class. Represents a Present.
 *              Initially the present has an image that will be replaced
 *              by the present image when the original is clicked
 */
export class Present {
  /*
   * @constructor
   * @param containerElement - DOM element that holds the present image
   * @param presentSrc - URL of the image to show when the present is opened
   */
  constructor(private containerElement: HTMLElement, private presentSrc: string, private image?: HTMLImageElement) {
    this.containerElement = containerElement;
    this.presentSrc = presentSrc;
    this.image = document.createElement('img');
    this.image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
    this.image.addEventListener('click', this.openPresent);
    this.containerElement.append(this.image);
  }

  /** @method openPresent 
   *  @description Event handler for click events
   *               Fires the 'present-opened' event
   *  @param {object} event - Event object
   */
  private openPresent = (event: Event): void => {
    this.image!.src = this.presentSrc;
    this.image!.removeEventListener('click', this.openPresent);
    document.dispatchEvent(new CustomEvent('present-opened'));
  }
}
