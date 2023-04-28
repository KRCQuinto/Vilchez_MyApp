import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

const rutas:Routes=[
  {
    path:'inicio',
    component:HomeComponent
  },
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'acerca',
    component:AcercaComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
 
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports:
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
