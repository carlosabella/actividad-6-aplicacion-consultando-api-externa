import { Component, inject, input, signal } from '@angular/core';
import { IUser } from '../../interfaces/iusers';
import { UsersService } from '../../services/users.service';
import {
  ActionButtonComponent,
  ButtonType,
  Actions
} from '../../shared/action-button/action-button.component';

@Component({
  selector: 'app-user-detail',
  imports: [ActionButtonComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  id = input<string>();
  user = signal<IUser | null>(null);
  usersService = inject(UsersService);

  public Actions = Actions;
  public ButtonType = ButtonType;

  async ngOnInit() {
    const userId: string = String(this.id());
    this.user.set(await this.usersService.getById(userId));
  }
}
