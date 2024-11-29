import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'; // Asegúrate de tener tu servicio de autenticación
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    Card,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabel,
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  loginForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  errorMessage: string = '';
  invalidForm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService // Inyectamos el servicio de autenticación
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Para acceder a los controles del formulario fácilmente
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // Si el formulario no es válido, salimos
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // Llamamos al servicio de autenticación para hacer login
    this.authService
      .login(this.f['email'].value, this.f['password'].value)
      .subscribe({
        next: (response) => {
          // Aquí gestionamos lo que pasa cuando la respuesta es exitosa
          // Redirigir a otra página, o mostrar un mensaje de éxito
          console.log('Login exitoso', response);
          // Redirigir al dashboard o página deseada
        },
        error: (err) => {
          // Si hay error en la respuesta, mostramos el mensaje de error
          this.errorMessage = 'Usuario o contraseña incorrectos';
          console.error('Error al hacer login', err);
        },
        complete: () => {
          // Se ejecuta al final, independientemente de éxito o error
          this.loading = false;
        },
      });
  }
}
