import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iusers';

type MessageConfig = {
  title: string;
  icon: 'success' | 'error';
};

const CONFIRMATION_MESSAGE = new Map<string, MessageConfig>([
  [
    'success',
    {
      title: 'Usuario Guardado con Éxito',
      icon: 'success',
    },
  ],
  [
    'error',
    {
      title: 'Error guardando el usuario',
      icon: 'error',
    },
  ],
]);

@Component({
  selector: 'app-user-new',
  imports: [ReactiveFormsModule],
  templateUrl: './user-new.component.html',
  styleUrl: './user-new.component.css',
})
export class UserNewComponent {
  userForm: FormGroup;
  users = inject(UsersService);

  constructor() {
    this.userForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  async createUser() {
    const user: IUser = this.getFormData();
    const response = await this.users.newUser(user);
    const responseType: string = response._id ? 'success' : 'error';
    const confirmationMessage = CONFIRMATION_MESSAGE.get(responseType);
    this.showConfirmationMessage(confirmationMessage);
    this.userForm.reset();
  }

  private getFormData(): IUser {
    let user: IUser = {} as IUser;
    const formUser = this.userForm.value;
    user.first_name = formUser.nombre;
    user.last_name = formUser.apellido;
    user.email = formUser.email;
    user.image = formUser.imagen;

    return user;
  }

  private showConfirmationMessage(confirmation: MessageConfig): void {
    Swal.fire({
      title: confirmation.title,
      icon: confirmation.icon,
      showConfirmButton: false,
      timer: 1800,
    });
  }
}
