import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }
  getPersonal()
  {
    return this.http.get("http://localhost/tienda/personal");
  }
  getProductos()
  {
    return this.http.get("http://localhost/tienda/productos");
  }
}
