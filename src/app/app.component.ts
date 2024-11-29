import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'construEasy';
  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
    this.primeng.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };
  }
}
