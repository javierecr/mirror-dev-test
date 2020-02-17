import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'characters',
    loadChildren: './characters/characters.module#CharactersModule'
  },
  {
    path: 'episodes',
    loadChildren: './episodes/episodes.module#EpisodesModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
