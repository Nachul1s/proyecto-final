import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { Ninos } from '../ninos/ninos';
@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
public infoTarjeta: Tarjeta[];
constructor(){
this.infoTarjeta = [
  {
    id:1,
    titulo: "Pantalones",
    marca: "Unisex",
    descripcion: "Pantalon de jean",
    img: "https://th.bing.com/th/id/OIP.CEETs7SCCdDkfyPJRv3CJgHaJ3?w=160&h=213&c=7&r=0&o=7&pid=1.7&rm=3",
    precio: 37.50,
    alt:" pantalones de jean",
  
  },
                                                                                          
]

}
productosSeleccinados: any = null;

/**
 *  @description
 * 
 */ 
   

/**
 * 
 *  @param producto
*/
verMas(producto: any){
  this.productosSeleccinados = producto;
}