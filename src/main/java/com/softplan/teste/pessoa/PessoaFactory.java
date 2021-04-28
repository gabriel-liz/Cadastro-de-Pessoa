package com.softplan.teste.pessoa;

import com.softplan.teste.pessoa.payload.PessoaResponse;
import org.springframework.stereotype.Component;

@Component
public class PessoaFactory {

    public PessoaResponse createPessoaResponse(Pessoa pessoa) {
        PessoaResponse pessoaResponse = new PessoaResponse();

        pessoaResponse.setUuid(pessoa.getUuid());
        pessoaResponse.setNome(pessoa.getNome());
        pessoaResponse.setCpf(pessoa.getCpf());
        pessoaResponse.setEmail(pessoa.getEmail());
        pessoaResponse.setNaturalidade(pessoa.getNaturalidade());
        pessoaResponse.setDataNascimento(pessoa.getDataNascimento());
        pessoaResponse.setPaisId(pessoa.getPais().getId());
        pessoaResponse.setSexoId(pessoa.getSexo().getId());

        return pessoaResponse;
    }
}
