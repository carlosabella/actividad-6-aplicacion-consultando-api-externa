import { Component, inject, input, signal } from '@angular/core';
import { IUser } from '../../interfaces/iusers';
import { UsersService } from '../../services/users.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-detail',
  imports: [RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  id = input<string>();
  user = signal<IUser | null>(null);
  usersService = inject(UsersService);

  async ngOnInit() {
    const userId: string = String(this.id());
    this.user.set(await this.usersService.getById(userId));
  }

  async deleteUser(user: IUser) {
    const confirmation = await Swal.fire({
      text: `Deseas borrar el usuario ${user.first_name} ${user.last_name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2874A6',
      cancelButtonColor: '#ffffff',
      confirmButtonText: 'Si',
    });
    if (confirmation.isConfirmed) {
      const response = await this.usersService.deleteUser(user._id);
      if (response.id) {
        Swal.fire({
          title: 'Borrado',
          text: 'El usuario ha sido borrado',
          icon: 'success',
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Ha ocurrido un error durante el borrado',
          icon: 'error',
        });
      }
    }
  }
}
