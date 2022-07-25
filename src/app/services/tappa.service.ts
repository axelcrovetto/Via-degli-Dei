import { Injectable } from '@angular/core';
import { Tappa } from '../classes/Tappa';
import { TappaInterface } from '../interfaces/tappa';

@Injectable({
  providedIn:'root'
})
export class TappaService {
tappe:Array<Tappa>= [
  { id:1,
    name: 'Bologna',
    costo:252.00,
    costoATesta:252/8,
    caparra:'Nessuna',
    data:"06-AGOSTO-2022",
    },
  { id:2,
  name: 'Monte Adone',
  costo:200,
  costoATesta: 200/8,
  caparra:'Nessuna',
  data:'07-AGOSTO-2022',
  note: '-',
  },
  { id:3,
  name: 'Madonna dei Fornelli',
  costo:176.00,
  costoATesta:176/8,
  caparra:'Nessuna',
  data:"08-AGOSTO-2022",
  note: '-',
  },
  { id:4,
  name: 'Monte di Fò',
  costo:376.00,
  costoATesta:376/8,
  caparra:'81.00€',
  data:"09-AGOSTO-2022",
  note: '-',
  },
  { id:5,
  name: 'San Piero a Sieve',
  costo:176.00,
  costoATesta:176/8,
  caparra:'40.00€',
  data:"06-AGOSTO-2022",
  note: '-',
  },
  { id:6,
  name: 'Bivigliano',
  costo:252.00,
  costoATesta:252/8,
  caparra:'Nessuna',
  data:"06-AGOSTO-2022",
  note: '-',
  },
  { id:7,
  name: 'Firenze',
  costo:252.00,
  costoATesta:252/8,
  caparra:'Nessuna',
  data:"06-AGOSTO-2022",
  note: '-',
  },
]

  getUsers() {

    return this.users;
  }
  deleteUser(user: User) {

    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
  updateUser(user: UserInterface) {
    const idx = this.users.findIndex(v => v.id === user.id);

    if (idx !== -1) {
      this.users[idx] = { ...user };
    }
  }
  createUser(user: UserInterface) {

    this.users.splice(0, 0, { ...user });

  }
  getUser(id:number):User{
    return this.users[id];
  }
}