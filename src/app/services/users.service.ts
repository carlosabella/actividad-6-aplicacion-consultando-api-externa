import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsersResponse, IUsers } from '../interfaces/iusers';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  getAll(): Promise<IUsersResponse> {
    return lastValueFrom(this.http.get<IUsersResponse>('https://peticiones.online/api/users'));
  }

  getById(id: string): Promise<IUsers> {
    return lastValueFrom(this.http.get<IUsers>(`https://peticiones.online/api/users/${id}`));
  }

  newUser(user: IUsers): Promise<IUsers> {
    return lastValueFrom(this.http.post<IUsers>('https://peticiones.online/api/users', user));
  }

  updateUser(user: IUsers): Promise<IUsers> {
    return lastValueFrom(this.http.put<IUsers>(`https://peticiones.online/api/users/${user.id}`, user));
  }

  deleteUser(id: string): Promise<IUsers> {
    return lastValueFrom(this.http.delete<IUsers>(`https://peticiones.online/api/users/${id}`));
  }
}
