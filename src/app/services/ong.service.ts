import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OngService {

  url='/api';
  constructor(private http: HttpClient) { }

  //get 
  getOng()
  {
    return this.http.get(this.url);
  }

  //get un ong
  getUnOng(id:string){
    return this.http.get<Ong[]>(this.url+'/'+id);
  }

  //agregar ong
  addOng(ong:Ong)
  {
    return this.http.post(this.url, ong);
  }

  //eliminar ong
  deleteOng(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //editar ong
  editPais(id:string, ong:Ong){
    return this.http.put(this.url+'/'+id, ong);
  }

}

export interface Ong{
  id_ong?:string;
  nombre?:string;
  logo?:string;
}
