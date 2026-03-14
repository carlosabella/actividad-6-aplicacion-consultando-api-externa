import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsersResponse, IUser } from '../interfaces/iusers';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  getAll(): Promise<IUsersResponse> {
    return lastValueFrom(this.http.get<IUsersResponse>('https://peticiones.online/api/users'));
  }

  getById(id: number): Promise<IUser> {
    return lastValueFrom(this.http.get<IUser>(`https://peticiones.online/api/users/${id}`));
  }

  newUser(user: IUser): Promise<IUser> {
    return lastValueFrom(this.http.post<IUser>('https://peticiones.online/api/users', user));
  }

  updateUser(user: IUser): Promise<IUser> {
    return lastValueFrom(this.http.put<IUser>(`https://peticiones.online/api/users/${user.id}`, user));
  }

  deleteUser(id: number): Promise<IUser> {
    return lastValueFrom(this.http.delete<IUser>(`https://peticiones.online/api/users/${id}`));
  }
}
