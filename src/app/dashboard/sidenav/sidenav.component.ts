import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [ButtonModule, CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  isOpen = false; // Estado de visibilidad del menú lateral

  // Definimos los elementos del menú
  menuItems = [
    { label: 'Inicio', route: '/home', icon: 'pi pi-home' },
    { label: 'Usuarios', route: '/users', icon: 'pi pi-info-circle' },
    { label: 'Clientes', route: '/clients', icon: 'pi pi-briefcase' },
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
