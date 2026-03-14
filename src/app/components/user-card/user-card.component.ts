import { Component, input } from '@angular/core';
import { IUsers } from '../../interfaces/iusers';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  user = input<IUsers>();
}
