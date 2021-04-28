import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pessoa } from '../models/pessoa.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PessoaService {

  constructor(private http:HttpClient) {}

  private pessoaUrl = 'http://localhost:8081/pessoas';

  public getPessoas() {
    return this.http.get<Pessoa[]>(this.pessoaUrl);
  }

  public getPessoa(uuid) {
    return this.http.get(this.pessoaUrl + "/" + uuid);
  }

  public deletePessoa(pessoa) {
    return this.http.delete(this.pessoaUrl + "/" + pessoa.uuid);
  }

  public createPessoa(pessoa) {
    return this.http.post<Pessoa>(this.pessoaUrl, pessoa);
  }

  public updatePessoa(pessoa) {
    return this.http.patch<Pessoa>(this.pessoaUrl + "/" + pessoa.uuid, pessoa);
  }

}
