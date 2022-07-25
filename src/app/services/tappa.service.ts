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
    note: '-',
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
  note: 'Pagato. Chiedere se ha ci ha prenotato la cena',
  },
  { id:5,
  name: 'San Piero a Sieve',
  costo:176.00,
  costoATesta:176/8,
  caparra:'40.00€',
  data:"10-AGOSTO-2022",
  note: 'Pagati da Sara & Alex',
  },
  { id:6,
  name: 'Bivigliano',
  costo:224.00,
  costoATesta:224/8,
  caparra:'126.00€',
  data:"11-AGOSTO-2022",
  note: 'Caparra per 9 persone, 14€ ciascuno. Verificare il resto',
  },
  { id:7,
  name: 'Firenze',
  costo:232.65,
  costoATesta:232.65/6,
  caparra:'Nessuna',
  data:"12-AGOSTO-2022",
  note: '-',
  },
]

  getTappe() {

    return this.tappe;
  }
  deleteTappa(tappa: Tappa) {

    const index = this.tappe.indexOf(tappa);
    if (index > -1) {
      this.tappe.splice(index, 1);
    }
  }
  updateTappe(tappa: TappaInterface) {
    const idx = this.tappe.findIndex(v => v.id === tappa.id);

    if (idx !== -1) {
      this.tappe[idx] = { ...tappa };
    }
  }
  createTappe(tappa: TappaInterface) {

    this.tappe.splice(0, 0, { ...tappa });

  }
  getTappa(id:number):Tappa{
    return this.tappe[id];
  }
}