/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc private modifier
  */

class Person {
  constructor(socialSecurityNumber: string, firstName: string, lastName: string) {
    this.socialSecurityNumber = socialSecurityNumber;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`; 
  }

  private socialSecurityNumber: string;
  private firstName: string;
  private lastName: string;
}

export let main = async () => {
  const alan = new Person('153-07-3130', 'Alan', 'Turing');
  console.log(alan.getFullName());
  console.log(alan.socialSecurityNumber);
};

main();
