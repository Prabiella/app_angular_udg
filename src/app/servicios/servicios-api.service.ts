import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiciosApiService {
 
  constructor(private http:HttpClient) { }
  getMovie(){
    return this.http.get('https://fast-crag-45759.herokuapp.com/api/pelis');
  }
  
}
