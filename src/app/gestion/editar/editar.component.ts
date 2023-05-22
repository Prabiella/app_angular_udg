import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  movieId: any;
  datos:any;

  constructor(
    private route: ActivatedRoute,
    private movie: ServiciosApiService,
    private http: HttpClient,

   

  ){}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.datos = this.movie.getMovie();
    });
  }
 

  onEditMovie(){
    
  }



}



