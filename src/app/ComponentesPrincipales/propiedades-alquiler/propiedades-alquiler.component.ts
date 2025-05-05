import { Component, inject, OnInit } from '@angular/core';
import { Propiedad } from '../../Interfaces/Propiedad';
import { PropiedadesService } from '../../Services/propiedades.service';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-propiedades-alquiler',
  imports: [NavComponent, FooterComponent,RouterLink,FormsModule],
  templateUrl: './propiedades-alquiler.component.html',
  styleUrl: './propiedades-alquiler.component.css'
})
export class PropiedadesAlquilerComponent implements OnInit{
  ngOnInit(): void {
    this.traerPropiedades();
   }
 
   listaPropiedades:Propiedad[]= [];
 
   listaPropiedadFiltrada:Propiedad[]=[];

  
 
   servicioPropiedad = inject(PropiedadesService);
 
  filtroDireccion: string = '';
  filtroAmbientes: number | null = null;
  filtroBanos: number | null = null;
  filtroCocheras: number | null = null;
 
 
 limpiarFiltros() {
   this.filtroDireccion = '';
   this.filtroAmbientes = null;
   this.filtroBanos = null;
   this.filtroCocheras = null;
   this.aplicarFiltros();
 }
 
 aplicarFiltros() {
  const propiedadesVenta = this.listaPropiedades.filter(p => p.tipo === 2); 
  this.listaPropiedadFiltrada = propiedadesVenta.filter(prop => {
    return (
      (!this.filtroDireccion || prop.direccion.toLowerCase().includes(this.filtroDireccion.toLowerCase())) &&
      (!this.filtroAmbientes || prop.ambientes === this.filtroAmbientes) &&
      (!this.filtroBanos || prop.banos === this.filtroBanos) &&
      (!this.filtroCocheras || prop.cocheras === this.filtroCocheras)
    );
  });
}
traerPropiedades() {
  this.servicioPropiedad.getPropiedades().subscribe({
    next: (lista) => {
      this.listaPropiedades = lista;
      this.aplicarFiltros(); 
    },
    error: (err: Error) => {
      console.log(err.message);
    }
  });
}

  
 }