import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieComponent} from './paginas/movie/movie.component';
import {MoviesComponent} from './paginas/movies/movies.component';
import {CrearComponent} from './gestion/crear/crear.component';
import {EditarComponent} from './gestion/editar/editar.component';

const routes: Routes = [
  {path:'',redirectTo:'movie', pathMatch:'full'},
  

  {
    path:'movie',
    loadChildren: () => import('./paginas/movie/movie.module').then(m =>m.MovieModule)
    /* component:MovieComponent */
  },
  {
    path:'movies/:id/:title/:synopsis/:year/:cover', 
    component:MoviesComponent
  },
  {
    path:'crear',
    component:CrearComponent
  },
  {
    path:'editar/:id', 
    component:EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
