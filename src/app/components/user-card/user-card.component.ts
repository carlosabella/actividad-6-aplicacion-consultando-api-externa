import { Component, inject, input } from '@angular/core';
import { IUser } from '../../interfaces/iusers';
import { UsersService } from '../../services/users.service';
import {
  ActionButtonComponent,
  ButtonType,
  Actions,
} from '../../shared/action-button/action-button.component';

@Component({
  selector: 'app-user-card',
  imports: [ActionButtonComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  user = input<IUser>();
  usersService = inject(UsersService);

  Actions = Actions;
  ButtonType = ButtonType;
}
