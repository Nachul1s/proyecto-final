import { Component } from '@angular/core';
import { Indumentaria } from '../../models/indumentaria';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hombres',
  imports: [CommonModule],
  templateUrl: './hombres.html',
  styleUrl: './hombres.css',
})
export class Hombres {
// Aca creo las tarjetas y las asigno, con el ng for lo que hago es una repetitiva que su iteracion va aumentando mediante el ID de infoIndumentaria
public infoIndumentariaHombre: Indumentaria[];
constructor(){
this.infoIndumentariaHombre = [
  {
    id:6,
    titulo: "Remera Negra Lisa",
    marca: "Casero",
    descripcion: "Zapatos para Hombre",
    img: "https://jumboargentina.vtexassets.com/arquivos/ids/660628/Remera-Hombre-Lisa-Escote-V-Negro-Urb-1-871901.jpg?v=637654365257930000",
    precio: 9,
    alt:"Remera Negra Lisa",
  
  },
  {
    id:7,
    titulo: "Jean de Hombre",
    marca: "Casero",
    descripcion: "Remera Negra para Hombre",
    img: "https://th.bing.com/th/id/R.239d5d31a855968b3697fa812e17f0a4?rik=077VGauKQdNs4w&riu=http%3a%2f%2fthunderjeans.co%2fcdn%2fshop%2fproducts%2f2-101023-FRONTAL-WEB.webp%3fv%3d1710349075&ehk=hFtrs6kM4F4ZP0Kv0vZYU2U9yW3pkGWPEVavmwDxdFk%3d&risl=&pid=ImgRaw&r=0",
    precio: 15,
    alt:"Jean de Hombre",
  
  },
   {
    id:8,
    titulo: "Zapatos de Hombre",
    marca: "Casero",
    descripcion: "Zapatos para Hombre",
    img:"https://resources.claroshop.com/medios-plazavip/s2/10996/1299349/5e1f8e4b9153d-c66d5821-5ebf-41da-9476-ec822471ab57-1600x1600.jpg",
    precio: 15,
    alt:"Zapatos de Hombre",
  
  },
]
}

}
