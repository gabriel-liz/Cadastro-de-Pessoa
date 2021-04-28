package com.softplan.teste.pessoa;

import com.softplan.teste.pessoa.payload.PessoaRequest;

import java.util.List;
import java.util.UUID;

public interface PessoaService {

    Pessoa createPessoa(PessoaRequest pessoaRequest);

    Pessoa getPessoa(UUID uuid);

    void updatePessoa(Pessoa pessoa, PessoaRequest pessoaRequest);

    List<Pessoa> findPessoas();

    void deletePessoa(Pessoa pessoa);
}
