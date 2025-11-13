import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Mensaje } from '../../models/mensaje';
/*
FormGroup es una directiva de de formularios que agrupa  una serie de datos
FormControl: Utilizada en conjunto  con FormGRuoup para tomar el valor de una propiedad indivdiual en un formulario.
ReactiveFormsModule: Activa el uso de formularios reactivos -> se ejecutan mediante una accion y se relaciona HTML
(interfaz grafica) con TS (logica)
validators:Pide o rquiere que un valor exista o sea vlidado como necesario

*/
@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css',
})
export class NewProduct {
  /*
  * Propiedads ESTRICTAMENTE requerida -> Validators.required
  Propiedades opcionales -> no lo llevan
  */
/*este es el nombre de mi formulario*/ formularioMensaje = new FormGroup /*FormGruoup me agrupa todos los datos del formulario*/({
  email: new FormControl /*FormControl agrupa los datos individuales del formulario*/(``, Validators.required),
  telefono:  new FormControl (null, Validators.required),
  mensaje: new FormControl ("", Validators.required ),
   
})

coleccionMensaje: Mensaje[] = [];
private contadorId = 1; /*Propiedad PRIVADA para manejar informacion sensible */

/**
 * 
   @description //metodo para la creacion de tarjetas segun formulario reactivo "formularioTarjeta"
   Condicional que se ejecuta si el formulario es valido
   Agregar nueva tarjeta a coleccionTarjetas
 */
crearMensaje(){
  if (this.formularioMensaje.valid){
    const nuevoMensaje: Mensaje = {
      //id es el unico valor que lo asignamos nosotros previamente -> AUTO INCREMENTABLE
      id: this.contadorId++, //el resto de propiedades toman el VLLOR de cada dato definido dentro del formulario
      email: this.formularioMensaje.value.email!,
      telefono:this.formularioMensaje.value.telefono!, //el signo de exclamacion es para que lo pueda detectar
      mensaje:this.formularioMensaje.value.mensaje!,
    }
    //Enviar con metodo "push" l constante "nuevaTarjeta"
    this.coleccionMensaje.push(nuevoMensaje);
    console.log(`Nuev tarjeta agrupada: `, nuevoMensaje);
    console.log ("Estado de la coleccion actual: ", this.coleccionMensaje);
    this.formularioMensaje.reset();
  }
}
}       

  