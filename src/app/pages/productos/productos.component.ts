import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  public productos:any[]=[]
  constructor (private servicio: ServiciosService){}


  ngOnInit(){
    this.servicio.getProductos()
    .subscribe((data:any)=>{
       this.productos=data;
       console.log(this.productos)
       console.log('Aqui estan los productos')
      
    })
   }
}
