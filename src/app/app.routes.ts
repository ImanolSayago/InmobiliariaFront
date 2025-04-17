import { Routes } from '@angular/router';
import { HomeComponent } from './ComponentesPrincipales/home/home.component';
import { DetallePropiedadComponent } from './ComponentesPrincipales/detalle-propiedad/detalle-propiedad.component';

export const routes: Routes = [

    {
        path:"Home", component:HomeComponent,
       
    },
    {
        path:'', redirectTo:'Home', pathMatch: 'full'
    },
    {
        path:"propiedad/:id", component: DetallePropiedadComponent,
    }
];
