import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa.component.html',
  styles: []
})
export class PessoaComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(private router: Router, private pessoaService: PessoaService) {

  }

  ngOnInit() {
    this.pessoaService.getPessoas()
      .subscribe( data => {
        this.pessoas = data;
      });
  };

  deletePessoa(pessoa: Pessoa): void {
    this.pessoaService.deletePessoa(pessoa)
      .subscribe( data => {
        this.pessoas = this.pessoas.filter(u => u !== pessoa);
      })
  };

}
