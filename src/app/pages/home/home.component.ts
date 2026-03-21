import { Component, inject, OnInit } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { UsersService } from '../../services/users.service';
import { IUsersResponse } from '../../interfaces/iusers';

@Component({
  selector: 'app-home',
  imports: [ UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  usersService = inject(UsersService);
  usersResponse: IUsersResponse | null = null;
  pages: number[] = [];

  async ngOnInit() {
    const response = await this.usersService.getAll();
    this.usersResponse = response;
    this.pages = Array.from(
      { length: this.usersResponse.total_pages },
      (_, i) => i + 1,
    );
  }
}
