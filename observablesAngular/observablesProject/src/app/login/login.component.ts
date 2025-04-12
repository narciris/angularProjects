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

  login(){
    this.auth.login({email : this.email, password: this.password})
    .subscribe({
      next: (response) => {
        if(response.success){
          this.router.navigate(['/characters']);
        } else{
          this.error = "correo o contraseña incorrectos";
        }
      },
      error : ()=> {
        this.error = "error al conectar con el servidor";
      }
    });
  }

}
