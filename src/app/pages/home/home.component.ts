import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { UsersService } from '../../services/users.service';
import { IUsersResponse } from '../../interfaces/iusers';

@Component({
  selector: 'app-home',
  imports: [UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private usersService = inject(UsersService);
  usersResponse = signal<IUsersResponse | null>(null);
  pages = computed(() => {
    const total_pages = this.usersResponse()?.total_pages ?? 0;
    return Array.from(
      { length: total_pages }, (_, i) => i + 1);
  });

  async ngOnInit() {
    await this.loadUsers(0);
  }

  private async loadUsers(page: number) {
    const response = await this.usersService.getAll(page);
    this.usersResponse.set(response);
  }

  async loadPage(page: number) {
    await this.loadUsers(page);
  }
}
