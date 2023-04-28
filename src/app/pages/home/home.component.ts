import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public personal:any[]=[]
  constructor (private servicio: ServiciosService){}


  ngOnInit(){
    this.servicio.getPersonal()
    .subscribe((data:any)=>{
       this.personal=data;
       console.log(this.personal)
       console.log('RECIBIDO!!!!')
      
    })
   }
}
