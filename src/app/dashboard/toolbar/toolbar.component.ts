import { Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [Toolbar, AvatarModule, SharedModule, ButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  currentUser: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Obtener el usuario logueado al iniciar el componente
    this.currentUser = this.authService.getUser(); // Aquí se llama al método para obtener el usuario
    console.log(this.currentUser);
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']); // Redirigir al login después de cerrar sesión
  }
}
