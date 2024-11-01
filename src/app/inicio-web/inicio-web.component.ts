import { Component, Input } from '@angular/core';
import { Producto } from '../Producto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-web',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio-web.component.html',
  styleUrl: './inicio-web.component.css'
})
export class InicioWebComponent {

  @Input() productito:Producto;
}
