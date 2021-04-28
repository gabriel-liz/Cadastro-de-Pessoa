import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from './pessoa.service';
import { PaisService } from './pais.service';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './add-pessoa.component.html'
})
export class AddPessoaComponent {

  pessoa: Pessoa = new Pessoa();
  paises: any = {};
  sexos: any = {};


  constructor(private router: Router, private pessoaService: PessoaService, private paisService: PaisService) {

  }

  ngOnInit() {
    this.paises = this.paisService.getPaises();

    this.sexos = [{"id": null, "descricao": ""},{"id": 1, "descricao": "Masculino"},{"id": 2, "descricao": "Feminino"}];
  }

  createPessoa(): void {
    this.pessoaService.createPessoa(this.pessoa)
        .subscribe( data => {
          alert("Pessoa criada com sucesso.");
          this.router.navigate(['/pessoas']);
        });

  };

}
