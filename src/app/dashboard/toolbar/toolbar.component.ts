import { Component, EventEmitter, Output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    AvatarModule,
    SharedModule,
    ButtonModule,
    ToolbarModule,
    CommonModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  currentUser: any;

  constructor(private authService: AuthService, private router: Router) {}
  @Output() toggle = new EventEmitter<void>();

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    console.log(this.currentUser);
  }

  toggleMenu() {
    this.toggle.emit(); // Emitir el evento
  }

  goToProfile(): void {
    console.log('Ir al perfil');
  }

  logout() {
    this.authService.logout(); // Cerrar sesión desde el servicio
    this.router.navigate(['/auth']); // Redirigir al login
  }
}
