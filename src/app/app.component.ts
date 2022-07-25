import { Component } from '@angular/core';
import { User } from './classes/User';
import { Tappa } from './classes/Tappa';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  userSelected: User = new User();

  tappaSelected: Tappa = new Tappa();



  updateUser(user: User) {
    this.showForm = true;
    this.userSelected = user;
  }
  newUser() {
    this.userSelected = new User();
    this.showForm = true;

  }

  updateTappa(tappa: Tappa) {
    this.showForm = true;
    this.tappaSelected = tappa;
  }
  newTappa() {
    this.tappaSelected = new Tappa();
    this.showForm = true;

  }
}