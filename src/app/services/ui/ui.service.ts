import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Este servicio se encarga de manejar la UI global de la aplicación
@Injectable({
  providedIn: 'root',
})
export class UiService {
  // Boolean para determinar si la pantalla es de tamaño móvil
  mobileSize: boolean;

  // Variable para manejar el enlace activo actual
  activeLink: string = '';

  // Boolean para determinar si el modo oscuro está activado
  darkMode: boolean = false;

  // Inyectamos PLATFORM_ID para poder hacer chequeos de plataforma
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Solo ejecutamos el siguiente código si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      // Obtenemos el estado del modo oscuro de localStorage y lo aplicamos
      this.darkMode = JSON.parse(localStorage.getItem('dm')) || false;
      this.updateDarkModeClass();
    }
  }

  // Cambia el estado del modo oscuro y guarda el nuevo estado en localStorage
  toggleColorMode(): void {
    this.darkMode = !this.darkMode;
    this.saveColorModeToLS();
    this.updateDarkModeClass();
  }

  // Cambia el estado del modo oscuro según el evento proporcionado y guarda el nuevo estado en localStorage
  changeColorMode(event: boolean): void {
    this.darkMode = event;
    this.saveColorModeToLS();
    this.updateDarkModeClass();
  }

  // Obtiene el estado del modo oscuro de localStorage y lo aplica
  setColorModeFromLS(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.darkMode = JSON.parse(localStorage.getItem('dm')) || false;
      this.updateDarkModeClass();
    }
  }

  // Guarda el estado del modo oscuro en localStorage
  saveColorModeToLS(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('dm', JSON.stringify(this.darkMode));
    }
  }

  // Establece el enlace activo en función de la URL actual
  setActiveLinkFromURL(): void {
    if (isPlatformBrowser(this.platformId)) {
      let currentPath = window.location.pathname.substring(1);
      this.activeLink = currentPath;
    }
  }

  // Actualiza la clase del body en función del estado del modo oscuro
  private updateDarkModeClass(): void {
    if (isPlatformBrowser(this.platformId)) {
      const body = document.body;
      if (this.darkMode) {
        // Si el modo oscuro está activo, añadimos la clase 'dark-mode'
        body.classList.add('dark-mode');
      } else {
        // Si el modo oscuro no está activo, eliminamos la clase 'dark-mode'
        body.classList.remove('dark-mode');
      }
    }
  }

  isLightMode(): boolean {
    return !document.body.classList.contains('dark-mode');
  }
}
