export class Producto{
    
    constructor(imagenes:string[],descripcion:string,dimenciones:string){
        this.imagenes=imagenes;
        this.descripcion=descripcion;
        this.dimenciones=dimenciones;
    }


    imagenes:string[]=[];
    descripcion="";
    dimenciones="";

}