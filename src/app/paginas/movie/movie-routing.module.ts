import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieComponent} from './movie.component';
import { MoviesComponent } from '../movies/movies.component';

const routes: Routes = [
  {path:'', component:MovieComponent},
  {path:':id', component:MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
