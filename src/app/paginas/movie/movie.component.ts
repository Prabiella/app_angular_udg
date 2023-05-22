import { Component, OnInit } from '@angular/core';
import {ServiciosApiService} from '../../servicios/servicios-api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  datos:any;

  constructor (private movie:ServiciosApiService){}
  ngOnInit(): void {
    this.datos = this.movie.getMovie();
  }

 

}
