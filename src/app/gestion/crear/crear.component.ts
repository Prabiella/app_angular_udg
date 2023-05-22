import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {

  constructor(private http:HttpClient){

  }

  onProductCreate(pelis: { title:string, synopsis:string, year:string, cover:string}){
    console.log(pelis);
    this.http.post('https://fast-crag-45759.herokuapp.com/api/pelis',pelis)
    .subscribe((res) => {
      console.log(res);
    });
  }

}
