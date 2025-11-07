import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tarjeta } from '../../models/tarjeta';
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
nuevoProducto = new FormGroup({
  titulo: new FormGroup (``, Validators.required),
  descripcion:  new FormGroup (``, Validators.required),
  precio:  new FormGroup (null, Validators.required),
  img: new FormGroup (""),
  alt: new FormGroup("")
})

coleccionProductos: Tarjeta[] = [];
}
/*Propiedad PRIVADA para manejar informacion sensible */
private contadorId = i;
