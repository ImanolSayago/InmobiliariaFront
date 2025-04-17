import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./ComponentesPrincipales/nav/nav.component";
import { HomeComponent } from "./ComponentesPrincipales/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InmobiliariaSayago';
}
