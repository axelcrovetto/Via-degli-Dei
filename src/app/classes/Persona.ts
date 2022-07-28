import { PersonaInterface } from './../interfaces/persona';
export class Persona implements PersonaInterface {
  id:number;
  name: string;
  credenziale:number;
  constructor() {
    this.name = '';
    this.credenziale = 0;
  }
}