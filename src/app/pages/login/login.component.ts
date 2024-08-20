import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../environments/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email='';
  password='';

  constructor(private authService: AuthService) {}

  onLogin(){
    if(this.email && this.password){
      this.authService.login(this.email,this.password);
    }
  }
}
