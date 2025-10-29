import { Routes } from '@angular/router';
//import { inicio } from '../app/componentes/inicionicio';
import { Component } from '@angular/core';
import { Inicio } from './componentes/inicio/inicio';
import { Contacto } from './componentes/contacto/contacto';
import { Hombres } from './componentes/hombres/hombres';
import { Mujeres } from './componentes/mujeres/mujeres';
import { Navbar } from './componentes/navbar/navbar';
import { Ofertas } from './componentes/ofertas/ofertas';
import { Ninos } from './componentes/ninos/ninos';
import { Sombreros } from './componentes/sombreros/sombreros';
import { Products } from './componentes/products/products';

export const routes: Routes = [
    
    {path: '', component : Inicio},
    {path: 'Inicio', component : Inicio},
    {path: 'Contacto', component: Contacto },
    {path: 'Hombres', component : Hombres},
    {path: 'Mujeres', component : Mujeres},
    {path: 'Navbar', component : Navbar},
    {path: 'Ofertas', component : Ofertas},
    {path: 'Niños', component : Ninos},
    {path: 'Sombreros', component : Sombreros},
      {path: 'Products', component : Products}
 
];
