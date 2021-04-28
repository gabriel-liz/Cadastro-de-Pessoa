import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoaComponent } from './pessoa/pessoa.component';
import { AddPessoaComponent } from './pessoa/add-pessoa.component';
import { UpdatePessoaComponent } from './pessoa/update-pessoa.component';

const routes: Routes = [
  { path: 'pessoas', component: PessoaComponent },
  { path: 'adicionar', component: AddPessoaComponent },
  { path: 'alterar/:uuid', component: UpdatePessoaComponent },
  { path: '', redirectTo: '/pessoas', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
