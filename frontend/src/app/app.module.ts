import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { AppRoutingModule } from './app.routing.module';
import {PessoaService} from './pessoa/pessoa.service';
import {PaisService} from './pessoa/pais.service';
import {HttpClientModule} from "@angular/common/http";
import {AddPessoaComponent} from './pessoa/add-pessoa.component';
import { UpdatePessoaComponent } from './pessoa/update-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    AddPessoaComponent,
    UpdatePessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PessoaService, PaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
