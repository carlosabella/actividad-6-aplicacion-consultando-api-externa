import { Component, inject, input } from '@angular/core';
import { IUser } from '../../interfaces/iusers';
import { RouterLink } from "@angular/router";
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';
import {
  ActionButtonComponent,
  ButtonType,
  Actions,
} from '../../shared/action-button/action-button.component';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink, ActionButtonComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  user = input<IUser>();
  usersService = inject(UsersService);

  Actions = Actions;
  ButtonType = ButtonType;
}
