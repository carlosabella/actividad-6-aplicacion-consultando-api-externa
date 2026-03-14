import { Component, inject, input, signal } from '@angular/core';
import { IUser } from '../../interfaces/iusers';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  id = input<string>();
  user = signal<IUser | null>(null);
  usersService = inject(UsersService);

  async ngOnInit() {
    console.log('CGA: ', this.id());
    const userId: number = Number(this.id());
    this.user.set(await this.usersService.getById(userId));
  }
}
