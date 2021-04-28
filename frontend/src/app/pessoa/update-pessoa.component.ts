import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pessoa } from '../models/pessoa.model';
import { PessoaService } from './pessoa.service';
import { PaisService } from './pais.service';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './update-pessoa.component.html',
})
export class UpdatePessoaComponent implements OnInit {

  pessoa: any = {};
  paises: any = {};
  sexos: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private pessoaService: PessoaService, private paisService: PaisService) {

  }

  ngOnInit() {
    this.pessoaService.getPessoa(this.route.snapshot.params['uuid'])
      .subscribe(data => {
        this.pessoa = data;
      });

    this.paises = this.paisService.getPaises();

    this.sexos = [{"id": null, "descricao": ""},{"id": 1, "descricao": "Masculino"},{"id": 2, "descricao": "Feminino"}];
  };

  updatePessoa(): void {
    this.pessoaService.updatePessoa(this.pessoa)
      .subscribe(data => {
        alert("Pessoa alterada com sucesso");
        this.router.navigate(['/pessoas']);
      });

  };
}
