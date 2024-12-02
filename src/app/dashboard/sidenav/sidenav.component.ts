import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [ButtonModule, RouterModule, SidebarModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @Input() isOpen: boolean = true; // Controla si la sidebar está abierta o cerrada
  @Output() onShow = new EventEmitter<void>(); // Emitido al abrir
  @Output() onHide = new EventEmitter<void>(); // Emitido al cerrar

  menuItems = [
    { label: 'Inicio', route: '/dashboard', icon: 'pi pi-home' },
    { label: 'Usuarios', route: '/dashboard/users', icon: 'pi pi-info-circle' },
    { label: 'Clientes', route: '/dashboard/clients', icon: 'pi pi-briefcase' },
  ];

  constructor(private router: Router) {}

  // Navegar a una ruta y cerrar la sidebar
  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.isOpen = false;
    this.onHide.emit(); // Emitir el evento manualmente
  }
}
