import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = false;

  constructor( private http:Http ) {
    this.cargar_productos();

  }

  public cargar_productos(){

      this.cargando = true;

      this.http.get('https://paginaweb-1496b.firebaseio.com/productos_idx.json')
          .subscribe( res => {
            // console.log(res.json());

            // setTimeout( ()=> {
              this.cargando = false;
              this.productos = res.json();
            // }, 1500 )
          });

  }

}
