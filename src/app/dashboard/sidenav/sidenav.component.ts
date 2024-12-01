import { Component, Input } from '@angular/core';
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
  @Input() isOpen: boolean = false; // Estado controlado externamente

  // Definimos los elementos del menú
  menuItems = [
    { label: 'Inicio', route: '/dashboard', icon: 'pi pi-home' },
    { label: 'Usuarios', route: '/dashboard/users', icon: 'pi pi-info-circle' },
    { label: 'Clientes', route: '/dashboard/clients', icon: 'pi pi-briefcase' },
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.isOpen = false;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.isOpen = false;
  }
}
