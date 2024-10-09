import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arregloInformacion:any=[{
    user_id:'',
    id:'',
    title:'',
    body:'',
  }]
  id!:number;
  ideliminar!:number;
  arregloInformacionID:any=[{
    user_id:'',
    id:'',
    title:'',
    body:'',
  }]
  constructor(private api:ApiService) {
    this.api.getPosts().subscribe(
      (res) => {
        this.arregloInformacion=res;
        console.log(res[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ver(){
      this.api.getPost(this.id).subscribe(
        (res) => {
          this.arregloInformacionID=res;
          console.log(res[0]);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  eliminar(){
    this.api.deletePost(this.ideliminar).subscribe(
      (res) => {
        console.log(res[0]);
        console.log('Se Elimino El Post');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
