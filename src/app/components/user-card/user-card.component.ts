import { Component, inject, input } from '@angular/core';
import { IUser } from '../../interfaces/iusers';
import { RouterLink } from "@angular/router";
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  user = input<IUser>();
  usersService = inject(UsersService);

  async deleteUser(user: IUser) {
    const confirmation = await Swal.fire({
      text: `Deseas borrar el usuario ${user.first_name} ${user.last_name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2874A6',
      cancelButtonColor: '#ffffff',
      confirmButtonText: 'Aceptar',
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
