import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inyecta el servicio de autenticación
  const router = inject(Router); // Inyecta el router

  if (authService.isAuthenticated()) {
    return true; // Si el usuario está autenticado, permite el acceso
  } else {
    router.navigate(['/auth']); // Si no está autenticado, redirige al login
    return false; // No permite el acceso
  }
};
