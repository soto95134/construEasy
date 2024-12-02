import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ToolbarComponent, SidenavComponent, RouterOutlet, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  isSidebarOpen: boolean = false; // Estado inicial de la sidebar

  handleSidebarShow(): void {
    this.isSidebarOpen = true;
    console.log('Sidebar abierta');
  }

  handleSidebarHide(): void {
    this.isSidebarOpen = false;
    console.log('Sidebar cerrada');
  }

  toggleSidenav(): void {
    this.isSidebarOpen = !this.isSidebarOpen; // Alternar el estado
  }
}
