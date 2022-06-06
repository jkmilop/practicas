import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramaComponent } from './components/programa/programa.component';
import { FacultwdComponent } from './components/facultwd/facultwd.component';
import { RolComponent } from './components/rol/rol.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'programa',
    component: ProgramaComponent,
  },
  {
    path: 'facultwd',
    component: FacultwdComponent,
  },
  {
    path: 'rol',
    component: RolComponent,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
