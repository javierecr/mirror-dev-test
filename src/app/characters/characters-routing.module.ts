import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';


const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  },
  {
    path: ':id', 
    loadChildren: './character/character.module#CharacterModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CharactersRoutingModule { }
