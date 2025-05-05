import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  rutas = inject(Router);
  isDropdownOpen = false;
  isMenuOpen = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  irPropiedadesAlquiler()
  {
    this.rutas.navigate(["alquiler"])
  }

  irVentas()
  {
    this.rutas.navigate(["venta"])
  }
  
}