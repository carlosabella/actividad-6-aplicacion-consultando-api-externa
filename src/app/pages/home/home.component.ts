import { Component, inject, OnInit } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/iusers';

@Component({
  selector: 'app-home',
  imports: [ UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  usersService = inject(UsersService);
  users: IUser[] = [];

  async ngOnInit() {
    const response = await this.usersService.getAll();
    this.users = response.results;
  }
}
