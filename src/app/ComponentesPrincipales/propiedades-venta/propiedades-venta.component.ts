import { Component, inject, OnInit } from '@angular/core';
import { PropiedadesService } from '../../Services/propiedades.service';
import { Propiedad } from '../../Interfaces/Propiedad';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propiedades-venta',
  imports: [NavComponent, FooterComponent,RouterLink,FormsModule],
  templateUrl: './propiedades-venta.component.html',
  styleUrl: './propiedades-venta.component.css'
})
export class PropiedadesVentaComponent implements OnInit {
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
  const propiedadesVenta = this.listaPropiedades.filter(p => p.tipo === 1); // base segura
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
      this.aplicarFiltros(); // ya se encarga de todo
    },
    error: (err: Error) => {
      console.log(err.message);
    }
  });
}

   filtrarPropiedades()
   {
     this.listaPropiedadFiltrada = this.listaPropiedades.filter(venta=>venta.tipo==1)
   }
 }
 