import { Component } from '@angular/core';
import { Indumentaria } from '../../models/indumentaria';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ninos',
  imports: [CommonModule],
  templateUrl: './ninos.html',
  styleUrl: './ninos.css',
})
export class Ninos {
  /*Propiedades en Angular -> variables
  Propiedades Publicas: libre acceso a su contenido
  Propiedad PRIVADA: Contenido restringido */
public infoIndumentariaBoca: Indumentaria[];
/*Instanciar  a la propiedad para poder hacer uso de ella
Decñaramos la colleccion de Tarjetas en base a modelo de interfaz "Tarjetas"
-se tiene que respetar el uso de todas las propiedades y su tipo   
-Tipo Alfanumerico (string) inicializa en ""
.Tipo Numerico (number) inicializa en 0
*/
constructor(){
this.infoIndumentariaBoca = [
  {
    id:1,
    titulo: "Campera de Boca", // tipo string, valor alfanumerico
    marca: "Adidas",
    descripcion: "Campéron de boca para utilizar en Invierno",
    img: "https://tse1.mm.bing.net/th/id/OIP._hzC7OMQxb3SYmZQBSQoMgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    precio: 75, // tipo number, valor numerico
    alt:"Pantalon de Boca",
  
  },
  {
     id:2,
    titulo: "Camiseta de Boca",
    marca: "Adidas",
    descripcion: "Camiseta del mas grande",
    img:"https://d26lpennugtm8s.cloudfront.net/stores/001/111/946/products/img_20200310_121624-011-1bd8bcf65c309d6b4d15838585534980-1024-1024.jpeg",
    precio: 60,
    alt:"Camiseta de boca",
  
  }, {
    id:3,
    titulo: "Pantalon de Boca",
    marca: "Adidas",
    descripcion: "Pantalon largo del Club Atletico Boca Juniors",
    img: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc518b0a5/products/AD_HC0995/AD_HC0995-1.JPG",
    precio: 25,
    alt:"Pantalon de Boca",
  
  },{
    id:4,
    titulo: "Short de Boca",
    marca: "Adidas",
    descripcion: "Short de Boca ",
    img: "https://essential.vtexassets.com/arquivos/ids/1154412/266-2891-7-8Y.jpg?v=638366093010900000",
    precio: 15,
    alt:"Short de Boca",
  
  },{
    id:5,
    titulo: "Medias de Boca",
    marca: "Adidas",
    descripcion: "Medias de Boca",
    img: "https://bocashop.vteximg.com.br/arquivos/ids/169777-1000-1000/HY3317_1.jpg?v=638277992179170000",
    precio: 10,
    alt:"Medias de Boca",
  },
]
//Variable para obtener los datos de un producto o una tarjeta seleccionada
// any -> NO va a tener restriccion y admite cualquier tipo

}
productoSeleccionado: any = null;

  /**f
   *  @description Metodo para ver mas informacion de un producto
   * recibe como parametro un producto de tipo "any" y lo asigna a la variable
   * "productos seleccionados"
   * 
   */


  /**
   * 
   *  @param producto
  */
  verMas(producto: any) {
    this.productoSeleccionado = producto;
  }
}

 