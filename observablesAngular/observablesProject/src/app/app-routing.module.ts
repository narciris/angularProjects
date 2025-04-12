import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'characters', component: CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
