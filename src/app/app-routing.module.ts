import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

{ path: '', redirectTo: '/home', pathMatch: 'full' },

{ path: 'home', component: HomeComponent },

{ path: 'servicos', component: ServicosComponent },
{ path: 'contato', component: ContatoComponent },
{ path: 'login', component: LoginComponent }

];

@NgModule({

imports: [ RouterModule.forRoot(routes) ],

exports: [ RouterModule ]

})

export class AppRoutingModule {}
