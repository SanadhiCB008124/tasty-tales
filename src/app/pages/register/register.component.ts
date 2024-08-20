import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../environments/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    if (this.email && this.password) {
      this.authService.register(this.email, this.password);
    }
  }
}
