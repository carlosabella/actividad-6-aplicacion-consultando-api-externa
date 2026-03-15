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

  async deleteUser(userId: string) {
    const confirmation = await Swal.fire({
      title: '¿Está seguro?',
      text: 'Este cambio no se podrá revertir',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    });
    if(confirmation.isConfirmed) {
      const response = await this.usersService.deleteUser(userId);
      if(response.id) {
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
