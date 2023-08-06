import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ong, OngService } from 'src/app/services/ong.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 //variable
 ListaOng: Ong[] = [];

 constructor(private OngService: OngService, private router:Router) { }

 ngOnInit(): void {
   this.listaOng();
 }

 listaOng()
 {
   this.OngService.getOng().subscribe(
     res=>{
       console.log(res)
       this.ListaOng=<any>res;
     },
     err =>console.log(err)
   );
 }

 eliminar(id:string)
 {
   this.OngService.deleteOng(id).subscribe(
     res=>{
       console.log('elemento Eliminado');
     },
     err=> console.log(err)
   )
 }

 editar(id:string)
 {
   this.router.navigate(['/edit/'+id])
 }

}
