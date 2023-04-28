import { Component } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent {

  rutas=[
    {
      titulo:'Inicio',
      direccion:'/inicio'
    },
    {
      titulo:'Productos',
      direccion:'/productos'
    },
    {
      titulo:'Contacto',
      direccion:'/contacto'
    },
    {
      titulo:'Acerca de nosotros',
      direccion:'/acerca'
    }
  ]
}
