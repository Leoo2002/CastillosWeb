import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioWebComponent } from "./inicio-web/inicio-web.component";
import { Producto } from './Producto.model';
import { CastilloService } from './Castillo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioWebComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'castillosWeb';

  constructor(private miProducto:CastilloService){
    this.productos=this.miProducto.productos;
    this.extras=this.miProducto.combos;
  }

  productos: Producto[] = [];
  extras: Producto[] = [];
}
