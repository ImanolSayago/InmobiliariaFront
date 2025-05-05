import { Routes } from '@angular/router';
import { HomeComponent } from './ComponentesPrincipales/home/home.component';
import { DetallePropiedadComponent } from './ComponentesPrincipales/detalle-propiedad/detalle-propiedad.component';
import { PropiedadesAlquilerComponent } from './ComponentesPrincipales/propiedades-alquiler/propiedades-alquiler.component';
import { PropiedadesVentaComponent } from './ComponentesPrincipales/propiedades-venta/propiedades-venta.component';

export const routes: Routes = [

    {
        path:"Home", component:HomeComponent
       
    },
    {
        path:'', redirectTo:'Home', pathMatch: 'full'
    },
    {
        path:"propiedad/:id", component: DetallePropiedadComponent
    },
    {
        path:"alquiler",component:PropiedadesAlquilerComponent
    }
    ,
    {
        path:"venta",component:PropiedadesVentaComponent
    }
];
