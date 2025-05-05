import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { PropiedadesService } from '../../Services/propiedades.service';
import { Propiedad } from '../../Interfaces/Propiedad';
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavComponent, FooterComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.traerPropiedades();
  }

listaPropiedades3:Propiedad[]=[];
  listaPropiedades: Propiedad[] =[];
  servicePropiedades = inject(PropiedadesService);

  traerPropiedades()
  {
    this.servicePropiedades.getPropiedades().subscribe({
      next:(ListaPR)=>
      {
        this.listaPropiedades=ListaPR;
        console.log(this.listaPropiedades[0].ambientes)
        this.filtrarMx3();
         
      },
      error:(Err:Error)=>
      {
        console.log(Err.message);
      }
    })
  }

  filtrarMx3()
  {
    var i =0;
    while(i<=3)
    {
      this.listaPropiedades3[i]= this.listaPropiedades[i];
      i++;
    }
  }
 

}
