import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarnetsComponent } from './carnets/carnets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarnetsComponent],
  template: '<app-carnets></app-carnets>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gestion des carnets d\'adresse';
}
