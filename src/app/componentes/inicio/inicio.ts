import { Component } from '@angular/core';
import { Hombres } from '../hombres/hombres';
import { Mujeres } from '../mujeres/mujeres';
import { Ninos } from '../ninos/ninos';

@Component({
  selector: 'app-inicio',
  imports: [Hombres, Mujeres,Ninos],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
