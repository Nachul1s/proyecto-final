import { Component } from '@angular/core';
import { Indumentaria } from '../../models/indumentaria';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mujeres',
  imports: [CommonModule],
  templateUrl: './mujeres.html',
  styleUrl: './mujeres.css',
})
export class Mujeres {

public infoIndumentariaMujer: Indumentaria[];
constructor(){
this.infoIndumentariaMujer = [
  {
    id:6,
    titulo: "Zapatos de mujer",
    marca: "Casero",
    descripcion: "Zapatos para Mujer",
    img: "https://tse4.mm.bing.net/th/id/OIP.BQkqusxRF7WtCICAHEPemgHaEL?rs=1&pid=ImgDetMain&o=7&rm=3",
    precio: 20,
    alt:"Zapatos de mujer",
  
  },
  {
    id:7,
    titulo: "Jean de mujer",
    marca: "Casero",
    descripcion: "Remera Negra para Mujer",
    img: "https://tse4.mm.bing.net/th/id/OIP.ZrQXP9EC-R5SMrwLmRgqjAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    precio: 35,
    alt:"Zapatos de mujer",
  
  },
   {
    id:8,
    titulo: "Remera Negra de mujer",
    marca: "Casero",
    descripcion: "Remera Negra para Mujer",
    img:"https://http2.mlstatic.com/D_998004-MLA49214220163_022022-O.jpg",
    precio: 9,
    alt:"Zapatos de mujer",
  
  },
]
}
}
