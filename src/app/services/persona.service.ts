import { Injectable } from '@angular/core';
import { Persona } from '../classes/Persona';
import { PersonaInterface } from '../interfaces/persona';

@Injectable({
  providedIn:'root'
})
export class PersonaService {
persone:Array<Persona>= [
  { id:1,
    name: 'Amarildo',
    credenziale:3.50,
  },
  {
    id:2,
    name: 'Elisabetta',
    credenziale:3.50,
  },
  {
    id:3,
  name: 'Virginia',
  credenziale:3.50,
  },
  {
    id:4,
  name: 'Federico',
  credenziale:3.50,
  },
  {
    id:5,
  name: 'Gabriele',
  credenziale:3.50,
  },
  {
    id:6,
  name: 'Sara',
  credenziale:3.50,
  },
  {
    id:7,
  name: 'Alex',
  credenziale:3.50,
  },
  {
    id:8,
  name: 'Axel',
  credenziale:3.50,
  },
]

  getPersone() {

    return this.persone;
  }
  deletePersona(persona: Persona) {

    const index = this.persone.indexOf(persona);
    if (index > -1) {
      this.persone.splice(index, 1);
    }
  }
  updatePersone(persona: PersonaInterface) {
    const idx = this.persone.findIndex(v => v.id === persona.id);

    if (idx !== -1) {
      this.persone[idx] = { ...persona };
    }
  }
  createPersone(persona: PersonaInterface) {

    this.persone.splice(0, 0, { ...persona });

  }
  getPersona(id:number):Persona{
    return this.persone[id];
  }
}