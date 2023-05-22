import { ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiciosApiService } from 'src/app/servicios/servicios-api.service';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  parametros: any;
  @ViewChild('EditPeli')
  form!: NgForm;
   /* Router: any; */
  

  constructor(
    private route: ActivatedRoute, 
    private http:HttpClient, 
    private router:Router,
   
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    this.parametros = params;
    this.onEditMovie(this.parametros);
     
    
    });
  }
 
 
  onDeleteMovie(id:string){
    this.http.delete('https://fast-crag-45759.herokuapp.com/api/pelis/'+id)
    .subscribe(() =>{
      this.router.navigate(['/']);
    });
  }


/*   onEditMovie(id: string): void {
 let test =   this.parametros.find((p: { id: string; }) => {
     return p.id === id})
    console.log();
  
  } */

  onEditMovie(data:any ){

    let formData = this.form.value;
    
    this.form.setValue({
      title: this.parametros.title,
      synopsis:this.parametros.synopsis,
      year:this.parametros.year,
      cover:this.parametros.cover
      
    });

    
    this.http.put('https://fast-crag-45759.herokuapp.com/api/pelis/' + this.parametros.id, formData)
    .subscribe(()=>{
      this.router.navigate(['/']);
    });
   

  }


}


