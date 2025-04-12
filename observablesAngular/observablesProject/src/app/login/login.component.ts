import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email = '';
  public password = '';
  public error = '';

  constructor(private auth : AuthService, private router : Router){

  }

  login() {
    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        if (response.accessToken && response.refreshToken) {
          // localStorage.setItem('accessToken', response.accessToken);
          // localStorage.setItem('refreshToken', response.refreshToken);
  
          this.router.navigate(['/characters']);
        } else {
          this.error = 'Respuesta inválida del servidor.';
        }
      },
      error: (err) => {
        console.log(err);
        if (err.status === 401) {
          this.error = 'Correo o contraseña incorrectos.';
        } else {
          this.error = 'Error al conectar con el servidor.';
        }
      }
    });
  }
  

}
