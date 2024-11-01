import { Producto } from "./Producto.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Esto hace que el servicio esté disponible globalmente
})

export class CastilloService{
    productos:Producto[]=[
        new Producto(["/img/chico/castillochico.jpeg","/img/castillochico2.jpeg","/img/castillochico3.jpeg"],"Castillo Chico","dimenciones"),
        new Producto(["/img/acuatico/acuatico.jpeg"],"Castillo Acuatico","dimenciones"),
        new Producto(["/img/conejo/conejo.jpeg","/img/castillochico2.jpeg","/img/castillochico3.jpeg"],"Castillo Bugs Bunny","dimenciones"),
        new Producto(["/img/lorenzo/lorenzo3.jpeg","/img/castillochico2.jpeg","/img/castillochico3.jpeg"],"Castillo Cachorrito","dimenciones")
    ];
    combos:Producto[]=[
      new Producto(["/img/atril/atriles2.jpeg"],"Atriles Para Pintar","dimenciones"),
      new Producto(["/img/metegol/metegol.jpeg"],"Metegol","dimenciones"),
      new Producto(["/img/combos/lorenzo+metegol.jpeg"],"Castillo + Metegol","dimenciones"),
      new Producto(["/img/combos/castillochico+atril.jpeg"],"Castillo + Atril","dimenciones"),
      new Producto(["/img/combos/lorenzo+metegol+atril.jpeg"],"Castillo + Atril + Metegol","dimenciones"),
      new Producto(["/img/combos/3castillos.jpeg"],"Combo Castillos Varios","dimenciones")
    ];
}

