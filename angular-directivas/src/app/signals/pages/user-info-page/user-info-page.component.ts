import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'signals-user-info-page',
  templateUrl: './user-info-page.component.html',
  styles: ``,
})
export class UserInfoPageComponent implements OnInit {
  private usersService = inject(UsersService);
  userId = signal(1);

  currentUser = signal<User | undefined>(undefined);
  fullName = computed<string>(() => {
    if (!this.currentUser()) return '';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });
  userWasFound = signal(true);

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;

    this.userId.set(id);
    this.currentUser.set(undefined);

    this.usersService.getUserById(id).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: () => {
        this.currentUser.set(undefined);
        this.userWasFound.set(false);
      },
    });
  }
}
