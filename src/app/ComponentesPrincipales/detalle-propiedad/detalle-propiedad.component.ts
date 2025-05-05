import { Component, inject, OnInit } from '@angular/core';
import { Propiedad } from '../../Interfaces/Propiedad';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PropiedadesService } from '../../Services/propiedades.service';
import { filter } from 'rxjs';
import { FooterComponent } from "../footer/footer.component";
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-detalle-propiedad',
  imports: [NavComponent, FooterComponent],
  templateUrl: './detalle-propiedad.component.html',
  styleUrl: './detalle-propiedad.component.css'
})
export class DetallePropiedadComponent implements OnInit{

  indiceImagenActual: number = 0;

  propiedad:Propiedad ={
    id: 0,
    titulo:"",
    descripcion:"",
    imagenPrincipal:"",
    direccion: "",
    ciudad: "",
    provincia: "",
    ambientes: 0,
    banos: 0,
    precio: 0,
    disponible: true,
    tipo:0,
    cocheras:0,
    FechaPublicacion: new Date(""),
    listaImg: []
  }

  anteriorImagen(): void {
    if (this.indiceImagenActual > 0) {
      this.indiceImagenActual--;
    }
  }

  siguienteImagen(): void {
    if (this.indiceImagenActual < this.propiedad.listaImg.length - 1) {
      this.indiceImagenActual++;
    }
  }

  proyectoID:number=0;
  route = inject(ActivatedRoute);
  serviceProyecto= inject(PropiedadesService);

  router = inject(Router)
  ngOnInit(): void {
     this.router.events.pipe(
          filter((event): event is NavigationEnd => event instanceof NavigationEnd)
        ).subscribe(() => {
          window.scrollTo(0, 0); // Restablecer el scroll al inicio
          console.log(this.propiedad.listaImg);
        });

    this.route.paramMap.subscribe(params => {
      this.proyectoID = Number(params.get('id'));

     this.serviceProyecto.getPropiedadesByid(this.proyectoID).subscribe({
        next:(pro)=>
        {
          this.propiedad= pro;
          console.log(this.propiedad.listaImg);

        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      })
  }
  )}


}
