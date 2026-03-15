import { Component, inject, input } from '@angular/core';
import { IUser } from '../../interfaces/iusers';
import { RouterLink } from "@angular/router";
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  user = input<IUser>();
  usersService = inject(UsersService);

  async deleteUser(userId: string) {
    const response = await this.usersService.deleteUser(userId);
  }
}
