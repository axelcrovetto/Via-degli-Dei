import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPencilAlt, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Persona } from '../app/classes/Persona';
import { PersonaService } from '../app/services/persona.service';

@Component({
  selector: 'tr[app-persona]',
  templateUrl: './persona.component.html'

  //inputs: ['user:user-data']
})
export class PersonaComponent implements OnInit {

  @Input('persona-data') persona: Persona = new Persona();
  @Output('onDeletePersona') personaDeleted = new EventEmitter();
  @Output('onSelectTappa') onSelectPersona = new EventEmitter();

  faPen = faPencilAlt;
  faTrash = faTrash;
  faInfo = faInfo;

  constructor(private personaService: PersonaService, private router: Router) {

  }

  ngOnInit() {
  }
  deleteTappa() {

    this.personaDeleted.emit(this.persona);


  }
  showPersonaDetail() {
    this.router.navigateByUrl('/persona/' + this.persona?.id);
  }
  updatePersona() {
    // this.route.navigateByUrl('/users/' + this.user?.id + '/edit');
    //this.route.navigate(['users', this.user?.id, 'edit']);
    //this.onSelectUser.emit(this.user);

  }

}