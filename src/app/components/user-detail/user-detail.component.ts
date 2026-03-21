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

  async deleteUser(userId: string) {
    const confirmation = await Swal.fire({
      title: '¿Está seguro?',
      text: 'Este cambio no se podrá revertir',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
    });
    if (confirmation.isConfirmed) {
      const response = await this.usersService.deleteUser(userId);
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
