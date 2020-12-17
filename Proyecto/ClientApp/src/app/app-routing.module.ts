import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonaRegisterComponent } from './Gestion/persona-register/persona-register.component';
import { PersonaConsultaComponent } from './Gestion/persona-consulta/persona-consulta.component';
import { RestauranteRegisterComponent } from './Gestion/restaurante-register/restaurante-register.component';
import { RestauranteConsultaComponent } from './Gestion/restaurante-consulta/restaurante-consulta.component';
import { ListaChequeoRegisterComponent } from './Gestion/lista-chequeo-register/lista-chequeo-register.component';
import { ListaChequeoConsultaComponent } from './Gestion/lista-chequeo-consulta/lista-chequeo-consulta.component';
import { HomeComponent } from './home/home.component';

import { VinculacionComponent} from './Gestion/vinculacion/vinculacion.component';
import { VinculacionConsultaComponent} from './Gestion/vinculacion-consulta/vinculacion-consulta.component';
import { LoginComponent } from './login/login.component' 
import { AuthGuard } from './services/auth.guard';

import { from } from 'rxjs';
const routes:Routes = [
  {path: '', redirectTo:'/loginComponent', pathMatch:'full'},
  {
    path:'loginComponent',
    component:LoginComponent
  },
  
  {
    path:'personaRegister',
    component:PersonaRegisterComponent,canActivate: [AuthGuard]

  },
  {
    path:'personaConsulta',
    component:PersonaConsultaComponent,canActivate: [AuthGuard]

  },
  {
    path:'restauranteRegister',
    component:RestauranteRegisterComponent,canActivate: [AuthGuard]

  },
  {
    path:'restauranteConsulta',
    component:RestauranteConsultaComponent,canActivate: [AuthGuard]

  },
  {
    path:'listaChequeoRegister',
    component:ListaChequeoRegisterComponent,canActivate: [AuthGuard]

  },
  {
    path:'listaChequeoConsulta',
    component:ListaChequeoConsultaComponent,canActivate: [AuthGuard]

  },
  {
    path:'homeComponent',
    component:HomeComponent,

  },
  {
    path:'vinculacionComponent',
    component:VinculacionComponent,canActivate: [AuthGuard]

  },
  {
    path:'vinculacionConsultaComponent',
    component:VinculacionConsultaComponent,canActivate: [AuthGuard]

  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
