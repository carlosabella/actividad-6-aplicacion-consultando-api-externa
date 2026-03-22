import { Component, computed, inject, input, signal } from '@angular/core';
import { IUser } from '../../interfaces/iusers';
import Swal from 'sweetalert2';
import { UsersService } from '../../services/users.service';
import { RouterLink } from '@angular/router';

export enum Actions {
  Delete = 'Eliminar',
  Update = 'Actualizar',
  List = 'Volver al Listado',
}

export enum ButtonType {
  image,
  text
}

@Component({
  selector: 'app-action-button',
  imports: [RouterLink],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.css',
})
export class ActionButtonComponent {
  type = input<ButtonType>();
  action = input<Actions>();
  isActionLink = input<Boolean>(false);
  user = input<IUser>();
  usersService = inject(UsersService);
  routerLink = computed(() => {
    if (this.action() == Actions.List) {
      return ['/home'];
    } else if (this.action() == Actions.Update) {
      return ['/updateuser', this.user()?._id];
    }
    return null;

  });

  async handleAction(){
    const user = this.user();
    if (this.action() == Actions.Delete && user) {
        await this.deleteUser(user);
    }
    return null;
  }

  private async deleteUser(user: IUser) {
    const confirmation = await Swal.fire({
      text: `Deseas borrar el usuario ${user.first_name} ${user.last_name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2874A6',
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
